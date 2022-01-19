Discord = require('discord.js');
FileSync = require('fs');
Client = new Discord.Client();

Prefix = process.env['PREFIX'];
Token = process.env['TOKEN'];
 
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
  else
  if (Folder.length <= 1) {Text = 'Command'}
  else 
  if (Folder.length >= 1) {Text = 'Commands'}
 
  console.log(`Lisining To ${Folder.length} ${Text}`);
  Client.user.setActivity(`${Folder.length} ${Text}`, {type: 'LISTENING'});
});
 
Client.on('message', (message) => {
  if (!message.content.startsWith(Prefix) || message.author.bot) return;
  Arguments = message.content.slice(Prefix.length).split(/ +/);
  Command = Arguments.shift();
  
  if (Command === 'help') {Client.commands.get('Help').execute(message)}
});
 
Client.login(Token);
