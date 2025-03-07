const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'slowmode',
  description: 'slowmode command',
  async execute(message, args) {
    
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    if(!args.length) {
      message.reply(`${settings.err} **|** Please type the slowmode time in secends`);
      return;
    };
    
    const secends = args[0];
    if(isNaN(secends)) {
      message.reply(`${settings.err} **|** Type the valid numbers`);
      return;
    };
    
    if(secends > 21600 || secends < 0) {
      message.reply(`${settings.err} **|** Please type a valid number`);
      return;
    };
    
    try {
      await message.channel.setRateLimitPerUser(secends);
      message.channel.send(`${settings.tick} **|** **Slowmode:** ${secends}s`)
    } catch (e) {
      message.reply(`${settings.err} **|** Unable to set slowmode\n> ${e.message}`);
    };
  },
};