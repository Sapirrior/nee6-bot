const settings = require('../configs/settings');
const { together } = require('../utils/togetherUtil');

module.exports = {
  name: 'youtube',
  description: 'youtube command',
  async execute(message) {
    
    const choice = 'youtube';
    const member = message.member;
    
    try {
      const code = await together(member, choice);
      await message.channel.send(code);
    } catch (e) {
      message.reply(`${settings.err} **|** An error occurred\n${settings.blank} **|** ${e.message}`);
    };
  },
};