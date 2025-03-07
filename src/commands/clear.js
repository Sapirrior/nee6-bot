const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'clear command',
  async execute(message, args) {
    
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    const amount = args[0];
    if(!amount || isNaN(amount) || amount < 0 || amount > 100) {
      message.reply(`${settings.err} **|** Please type a valid amount`);
      return;
    };
    
    try {
      await message.channel.bulkDelete(amount, true);
      await message.channel.send(`${settings.tick} **|** Deleted ${amount} message(s)`);
    } catch (e) {
      await message.reply(`${settings.err} **|** Unable to delete messages\n${settings.blank} **|** ${e.message}`);
    };
  },
};