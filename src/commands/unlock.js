const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'unlock',
  description: 'unlock command',
  async execute(message) {
    
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    try {
      message.channel.permissionOverwrites.edit(message.guild.id, { SendMessages: true });
      message.channel.send(`${settings.tick} **|** **Unlocked ${message.channel.name}**`);
    } catch (e) {
      message.reply(`${settings.err} **|** Unable to unlock the channel\n${settings.blank} **|** ${e.message}`);
    };
  },
};
