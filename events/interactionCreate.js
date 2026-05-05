module.exports = {
  name: "interactionCreate",

  async execute(client, interaction) {

    // ================= SLASH COMMANDS =================
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command) {
        return interaction.reply({
          content: "Command not found",
          ephemeral: true
        });
      }
