const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'warn',
  description: 'warn command',
  async execute(message, args) {
    
    if(!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    const user = message.mentions.users.first();
    const reason = args.slice(1).join(' ') || 'No reason provided';
    
    if(!user) {
      message.reply(`${settings.err} **|** Please mention a valid user to warn`);
      return;
    };
    
    if(user.id === message.author.id) {
      message.reply(`${settings.err} **|** You cannot warn yourself`);
      return;
    };
    
    if(user.id === message.client.user.id) {
      message.reply(`${settings.err} **|** I cannot warn myself`);
      return;
    };
    
    const msg = `${settings.warn} **|** <@${user.id}> has been warned\n${settings.blank} **|** **Reason:** ${reason}`;
    const warning = `${settings.warn} **|** You have been warned in ${message.guild.name}\n${settings.blank} **|** **Reason:** ${reason}`;
    await message.channel.send(msg);
    await user.send(warning);
  },
};