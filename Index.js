const { Client, Intents } = require('discord.js);
const client = new Client({ intents: ??? });
client.once('ready', () => {});
client.on('messageCreate', (message) => {});
client.login('TOKEN');
