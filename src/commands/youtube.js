const settings = require('../configs/settings');
const { together } = require('../utils/togetherUtil');

module.exports = {
  name: 'together',
  description: 'Starts a Discord Together YouTube activity.',
  async execute(message) {

    const member = message.member;
    const choice = 'youtube'; // Set the choice to 'youtube'

    const result = await together(member, choice);

    if (result.error) {
      message.channel.send(result.error);
    } else if (result.code) {
      message.channel.send(result.code);
    } else {
      message.channel.send(`${settings.err} **|** An unexpected error occurred.`);
    }
  },
};