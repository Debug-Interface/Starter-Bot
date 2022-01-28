console.clear();
const { TOKEN, PREFIX } = process.env;

Discord = require('discord.js');
FileSync = require('fs');

Intents = new Discord.Intents(32767);
Client = new Discord.Client({ intents: Intents });

Client.commands = new Discord.Collection();
Folder = FileSync.readdirSync('./Commands/');
Folder.filter(File => File.endsWith('.js'));

for (File of Folder) {
  Command = require(`./Commands/${File}`);
  Client.commands.set(Command.name, Command);
}

Client.once('ready', () => {
  console.log(`${Client.user.username} Is Online!`);
  
  Folder = FileSync.readdirSync('./Commands/');
  
  if (Folder.length <= 0) {Text = 'Commands'}
  else if (Folder.length <= 1) {Text = 'Command'}
  else if (Folder.length >= 1) {Text = 'Commands'}
  
  console.log(`Lisining To ${Folder.length} ${Text}`);
  
  Client.user.setActivity(`${Folder.length} ${Text}`, {type: 'LISTENING'});
});
 
Client.on('messageCreate', (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  Arguments = message.content.slice(PREFIX.length).split(/ +/);
  Command = Arguments.shift();
  
  if (Command === 'help') { Client.commands.get('Help').execute(message) }
});
 
Client.login(TOKEN);
