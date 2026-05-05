module.exports = {
  invitesCache: new Map(),

  // Load invites when bot starts
  async load(guild) {
    const invites = await guild.invites.fetch().catch(() => {});
    if (!invites) return;

    this.invitesCache.set(
      guild.id,
      new Map(invites.map(inv => [inv.code, inv.uses]))
    );
  },

  // Track joins
  async track(member) {
    const cachedInvites = this.invitesCache.get(member.guild.id);
    const newInvites = await member.guild.invites.fetch().catch(() => {});
    if (!newInvites || !cachedInvites) return;

    let usedInvite = null;

    for (const invite of newInvites.values()) {
      const oldUses = cachedInvites.get(invite.code) || 0;

      if (invite.uses > oldUses) {
        usedInvite = invite;
        break;
      }
    }

    // update cache
    this.invitesCache.set(
      member.guild.id,
      new Map(newInvites.map(inv => [inv.code, inv.uses]))
    );

    const channel = member.guild.systemChannel;
    if (!channel) return;

    if (usedInvite && usedInvite.inviter) {
      channel.send(
        `📨 ${member.user.tag} joined using **${usedInvite.inviter.tag}**'s invite`
      );
    } else {
      channel.send(`📨 ${member.user.tag} joined (invite not tracked)`);
    }
  }
};
