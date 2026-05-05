module.exports = {
  name: "giveaway",
  async execute(interaction, client) {
    const duration = 10000; // 10 sec test
    const prize = "Free Nitro";

    await interaction.reply("Giveaway started!");
    client.systems.giveaway.start(interaction.channel, duration, prize);
  }
};
