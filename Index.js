const { Client, Intents } = require('discord.js);
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.once('ready', () => {});
client.on('messageCreate', (message) => {});
client.login('TOKEN');
