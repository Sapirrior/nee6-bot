const { PermissionsBitField } = require('discord.js');
const config = require('../data/config');

module.exports = {
  name: 'kick',
  description: 'Kick command',
  async execute(message) {
    
    const target = message.mentions.users.first();
    const user = message.author;
    const perm = user.permissions.has(PermissionsBitField.Flags.KickMembers);
    
    if(!target) {message.channel.send(`${config.err} **|** Mention someone`); return;}
    if(!perm) {message.channel.send(`${config.err} **|** You need Kick Members permission`); return;}
    if(user.id == target.id) {message.channel.send(`${config.err} **|** You cannot kick yourself`); return;}
    
    await target.kick().catch(err => {message.channel.send(`${config.err} **|** Unable to kick that user`)});
    await message.channel.send(`${config.done} **|** Kicked The User\n${config.blank} **|** Username: ${target.username}`);
    
  },
};