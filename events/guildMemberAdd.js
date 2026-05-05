module.exports = {
  name: "guildMemberAdd",

  async execute(client, member) {

    // ================= INVITES TRACKING =================
    if (client.systems?.invites) {
      client.systems.invites.track(member);
    }

    // ================= WELCOME SYSTEM =================
    if (client.systems?.welcome) {
      client.systems.welcome.send(member);
    }

  }
};
