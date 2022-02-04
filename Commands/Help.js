const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const button1 = new MessageButton().setCustomId('primary').setLabel('Primary').setStyle('PRIMARY')

module.exports = ({
  name: 'Help',
  description: 'This Is A Help Command!',
  execute (message) {

    Embed1 = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Title')
    .setDescription('Description')
    .setTimestamp()
    
    Row = new MessageActionRow().addComponents( button1 );
    
    message.channel.send({ embeds: [ Embed1 ], components: [ Row ] });
  }
});
