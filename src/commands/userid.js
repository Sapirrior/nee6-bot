const config = require('../data/config');

module.exports = {
  name: 'userid',
  description: 'userid command',
  async execute(message) {
    
    const mention = message.mentions.users.first();
    if(!mention) {
      message.channel.send(`${config.err} **|** Mention Someone`);
      return;
    };
    
    const id = mention.id;
    message.channel.send(`${config.done} **|** **User ID:** ${id}`);
  },
};