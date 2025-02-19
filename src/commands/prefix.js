require('dotenv').config();

module.exports = {
  name: 'ship',
  description: 'Ship command',
  async execute(message) {
    message.channel.send(`**|** The prefix is **${process.env.PREFIX}**`);
  },
};