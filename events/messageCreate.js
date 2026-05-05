module.exports = {
  name: "messageCreate",
  async execute(client, message) {
    if (message.author.bot) return;

    client.systems.automod.run(message);
    client.systems.autoresponder.run(message);
    client.systems.autoreact.run(message);
  }
};
