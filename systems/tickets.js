const { PermissionsBitField } = require('discord.js');

module.exports = {

  async create(interaction) {
    const channel = await interaction.guild.channels.create({
      name: `ticket-${interaction.user.username}`,
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: interaction.user.id,
          allow: [PermissionsBitField.Flags.ViewChannel]
        }
      ]
    });

    await interaction.reply({ content: `Ticket created: ${channel}`, ephemeral: true });
  },

  async close(interaction) {
    const channel = interaction.channel;

    if (!channel.name.startsWith("ticket-")) {
      return interaction.reply({ content: "This is not a ticket channel", ephemeral: true });
    }

    await interaction.reply("Closing ticket...");
    setTimeout(() => channel.delete(), 3000);
  }

};
