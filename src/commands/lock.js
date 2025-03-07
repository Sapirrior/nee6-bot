const settings = require('../configs/settings');
const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'lock',
  description: 'lock command',
  async execute(message) {
    
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
      message.reply(`${settings.err} **|** You do not have permission to use this command`);
      return;
    };
    
    try {
      await message.channel.permissionOverwrites.edit(message.guild.id, { SendMessages: false });
      await message.channel.send(`${settings.tick} **|** **Locked ${message.channel.name}**`);
    } catch (e) {
      await message.reply(`${settings.err} **|** Unable to lock the channel\n${settings.blank} **|** ${e.message}`);
    };
  },
};