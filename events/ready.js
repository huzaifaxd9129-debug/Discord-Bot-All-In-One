module.exports = {
  name: "ready",
  execute(client) {
    console.log(`${client.user.tag} is online`);

    const statuses = [
      "👑 Made By Huztro",
      "🔥 Use /help For More Info",
      `${client.guilds.cache.size} servers`
    ];

    let i = 0;
    setInterval(() => {
      client.user.setPresence({
        activities: [{ name: statuses[i % statuses.length] }],
        status: "online"
      });
      i++;
    }, 5000);
  }
};
