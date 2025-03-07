const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'hide',
  description: 'hide command',
  async execute(message) {
    
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    try {
      await message.channel.permissionOverwrites.edit(message.guild.id, { ViewChannel: false });
      await message.channel.send(`${settings.tick} **|** **Hidden ${message.channel.name}**`);
    } catch (e) {
      await message.reply(`${settings.err} **|** Unable to hide the channel\n${settings.blank} **|** ${e.message}`);
    };
  },
};