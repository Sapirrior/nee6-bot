const settings = require('../configs/settings');

module.exports = {
  name: 'avatar',
  description: 'avatar command',
  async execute(message) {
    const target = message.mentions.users.first()
    if(!target) return message.reply(`${settings.err} **|** Please mention someone`);
    const avatar = target.displayAvatarURL({dynamic: true});
    const embed = { author: { name: target.username }, image: { url: avatar } };
    message.channel.send({ embeds: [embed] });
  },
};