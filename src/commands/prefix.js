require('dotenv').config();

module.exports = {
  name: 'prefix',
  description: 'Prefix command',
  async execute(message) {
    message.channel.send(`**|** The prefix is **${process.env.PREFIX}**`);
  },
};