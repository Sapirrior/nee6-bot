const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'say',
  description: 'say command',
  async execute(message, args) {
    
    const msg = args.join(' ');
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    if(!args.length) {
      message.reply(`${settings.err} **|** Please type something`);
      return;
    };
    
    if(msg.length > 300) {
      message.reply(`${settings.err} **|** The message is too long`);
      return;
    };
    await message.channel.send(msg);
  },
};