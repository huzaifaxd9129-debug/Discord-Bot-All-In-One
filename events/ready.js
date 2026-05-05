module.exports = {
  name: "ready",

  async execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);

    // ================= STATUS ROTATION =================
    const statuses = [
      "👑 Made By Huztro",
      `${client.guilds.cache.size} servers`,
      "Use /help"
    ];

    let i = 0;

    setInterval(() => {
      client.user.setPresence({
        activities: [{ name: statuses[i % statuses.length] }],
        status: "online"
      });

      i++;
    }, 5000);

    // ================= INVITES SYSTEM INIT =================
    if (client.systems?.invites) {
      client.guilds.cache.forEach(guild => {
        client.systems.invites.load(guild);
      });

      console.log("📨 Invite tracking initialized");
    }

    // ================= READY CONFIRM =================
    console.log("🚀 Bot is fully ready!");
  }
};
