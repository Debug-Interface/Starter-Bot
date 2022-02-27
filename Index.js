const { TOKEN, PREFIX } = process.env;

Discord = require('discord.js');
FileSync = require('fs');

Intents = new Discord.Intents(32767);
Client = new Discord.Client({ intents: Intents });

Client.commands = new Discord.Collection();

Folder = FileSync.readdirSync('./Commands/');
Folder.filter(file => file.endsWith('.js'));

for (file of Folder ) {
  Command = require(`./Commands/${file}`);
  Client.commands.set(Command.name, Command);
}

Client.once('ready', () => {
  console.log(`Name: ${Client.user.username}`);
});

Client.on('messageCreate', (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  Arguments = message.content.slice(PREFIX.length).split(/ +/);
  Command = Arguments.shift();
  
  if (Command === 'help') { Client.commands.get('Help').execute(message) }
});

Client.login(TOKEN);
