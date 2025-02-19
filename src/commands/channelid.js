const config = require('../data/config');

module.exports = {
  name: 'channelid',
  description: 'channelid command',
  async execute(message) {
    const id = message.channel.id;
    message.channel.send(`${config.done} **| Channel ID:** ${id}`);
  },
};