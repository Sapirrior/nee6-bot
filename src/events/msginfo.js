const { Events } = require('discord.js');
const settings = require('../configs/settings');

module.exports = {
  name: Events.MessageReactionAdd,
  async execute(reaction) {
    
    if(reaction.partial) {
      await reaction.fetch().catch(err => {console.log(err)});
    };
    
    const triggerEmoji = settings.msginfo;
    
    if(reaction.emoji.name !== triggerEmoji) return;
    const message = reaction.message
    
    embed = {
      color: 0x7fbbe7,
      author: { name: 'Message Info' },
      fields: [
        { name: 'Message Content', value: message.content || 'No text content' },
        { name: 'Author', value: `${message.author.tag} (${message.author.id})` },
        { name: 'Channel', value: `${message.channel.name} (${message.channel.id})` },
        { name: 'Message ID', value: message.id },
        { name: 'Timestamp', value: message.createdAt.toLocaleString() }]
    };
    
    message.channel.send({embeds: [embed]}).catch(err => {console.log(err)})
  },
};