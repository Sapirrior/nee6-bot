const settings = require('../configs/settings');

module.exports = {
  name: 'youtube',
  description: 'youtube activity command',
  async execute(message) {
    
    const choice = 'youtube';
    const member = message.member;
    const response = await together(member, choice);
    await message.channel.send(response);
  },
};

async function together(member, choice) {

  const vc = member.voice.channel?.id;
  if (!vc) return "You must be in a voice channel to use this command.";

  const invite = await member.client.discordTogether.createTogetherCode(vc, choice);
  return `${settings.premium} **|** ${invite.code}`;
};