const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
const config = require('./config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.GuildMember]
});

// ================= COMMAND HANDLER =================
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
  const cmd = require(`./commands/${file}`);
  client.commands.set(cmd.name, cmd);
}

// ================= EVENT HANDLER =================
const eventFiles = fs.readdirSync('./events').filter(f => f.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);

  client.on(event.name, (...args) => {
    event.execute(client, ...args);
  });
}

// ================= SYSTEMS LOADER =================
client.systems = {
  automod: require('./systems/automod'),
  autoreact: require('./systems/autoreact'),
  autoresponder: require('./systems/autoresponder'),
  tickets: require('./systems/tickets'),
  welcome: require('./systems/welcome'),
  invites: require('./systems/invites'),
  verification: require('./systems/verification')
};

// ================= LOGIN =================
client.login(config.token);
