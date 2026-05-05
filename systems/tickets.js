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

    return channel;
  }
};
