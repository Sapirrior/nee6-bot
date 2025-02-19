const config = require('../data/config');

mofule.exports = {
  name: 'guildid',
  description: 'guilid command',
  async execute(message) {
    
    const id = message.guild.id;
    message.channel.send(`${config.done} **| Guild ID** ${id}`);
  },
};