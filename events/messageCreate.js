module.exports = {
  name: "messageCreate",

  async execute(client, message) {
    if (!message.guild) return;
    if (message.author.bot) return;

    // ================= AUTOMOD =================
    if (client.systems?.automod) {
      client.systems.automod.run(message);
    }

    // ================= AUTO RESPONDER =================
    if (client.systems?.autoresponder) {
      client.systems.autoresponder.run(message);
    }

    // ================= AUTO REACT =================
    if (client.systems?.autoreact) {
      client.systems.autoreact.run(message);
    }
  }
};
