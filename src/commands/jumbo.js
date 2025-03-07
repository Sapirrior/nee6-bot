const settings = require('../configs/settings');

module.exports = {
  name: 'jumbo',
  description: 'jumbo command',
  async execute(message, args) {
    
    if(!args.length) {
      message.reply(`${settings.err} **|** Please type the custom emoji`)
      return;
    };
    
    const emoji = args[0];
    const emojiReg = /^<a?:(\w+):(\d+)>$/;
    const emojiMatch = emoji.match(emojiReg);
    
    if(!emojiMatch) {
      message.reply(`${settings.err} **|** Please type a valid custom emoji`);
      return;
    };
    
    const emojiId = emojiMatch[2];
    const animated = emoji.startsWith('<a:');
    const imageUrl = `https://cdn.discordapp.com/emojis/${emojiId}.${animated ? 'gif' : 'png'}?size=4096`;
    const embed = { color: 0x7fbbe7, image: { url: imageUrl }};
    message.channel.send({embeds: [embed]});
  },
};