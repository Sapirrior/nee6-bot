async function together(member, choice) {
  const settings = require('../configs/settings');

  const vc = member.voice.channel?.id;
  if (!vc) {
    return { error: `${settings.err} **|** You must be in a voice channel` }; // Return an object with an error property
  }

  try {
    const invite = await member.client.discordTogether.createTogetherCode(vc, choice);
    return { code: `${settings.premium} **|** ${invite.code}` }; // Return an object with a code property
  } catch (error) {
    console.error('Error creating Discord Together code:', error);
    return { error: `${settings.err} **|** Failed to create activity. Please try again.` }; // Return an error object if creating the invite fails.
  }
}

module.exports = { together };