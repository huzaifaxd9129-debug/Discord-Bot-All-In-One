module.exports = {
  async verify(interaction) {
    const role = interaction.guild.roles.cache.find(r => r.name === "Verified");
    if (!role) return interaction.reply({ content: "No 'Verified' role found", ephemeral: true });

    if (interaction.member.roles.cache.has(role.id)) {
      return interaction.reply({ content: "Already verified", ephemeral: true });
    }

    await interaction.member.roles.add(role);
    interaction.reply({ content: "You are now verified ✅", ephemeral: true });
  }
};
