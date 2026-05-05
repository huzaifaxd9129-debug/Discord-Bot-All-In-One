module.exports = {
  async start(channel, duration, prize) {
    const msg = await channel.send(`🎉 **GIVEAWAY** 🎉\nPrize: ${prize}\nReact with 🎉`);

    await msg.react("🎉");

    setTimeout(async () => {
      const reaction = msg.reactions.cache.get("🎉");
      if (!reaction) return channel.send("No participants.");

      const users = await reaction.users.fetch();
      const filtered = users.filter(u => !u.bot);

      if (filtered.size === 0) return channel.send("No valid entries.");

      const winner = filtered.random();
      channel.send(`🎉 Winner: ${winner} | Prize: **${prize}**`);
    }, duration);
  }
};
