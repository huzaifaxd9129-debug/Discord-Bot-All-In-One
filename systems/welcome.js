const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../data/config.json');

module.exports = {
  async send(member) {
    const data = JSON.parse(fs.readFileSync(configPath));

    if (!data.welcomeChannel) return;

    const channel = member.guild.channels.cache.get(data.welcomeChannel);
    if (!channel) return;

    channel.send(`Welcome ${member} to **${member.guild.name}** 🎉`);
  }
};
