module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {

    if (interaction.isChatInputCommand()) {
      const cmd = client.commands.get(interaction.commandName);
      if (cmd) cmd.execute(interaction, client);
    }

    if (interaction.isButton()) {
      if (interaction.customId === "create_ticket") {
        const channel = await client.systems.tickets.create(interaction);
        interaction.reply({ content: `Created: ${channel}`, ephemeral: true });
      }
    }
  }
};
