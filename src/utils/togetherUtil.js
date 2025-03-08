function together(member, choice) {
  const settings = require('../configs/settings');
  
  const vc = member.voice.channel?.id;
  if(!vc) {
    const err1 = `${settings.err} **|** You must be in a voice channel`;
    return err1;
  };
  
  const invite = await member.client.discordTogether.createTogetherCode(vc, choice);
  const code = `${settings.premium} **|** ${invite.code}`;
  return code;
};

module.exports = { together };