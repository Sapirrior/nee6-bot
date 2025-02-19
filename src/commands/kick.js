const { PermissionsBitField } = require('discord.js');
const config = require('../data/config');

module.exports = {
  name: 'kick',
  description: 'Kick command',
  async execute(message) {
    
    const target = message.mentions.users.first();
    if(!target) {message.channel.send(`${config.err} **|** Mention someone`); return;};
    
    const targetMember = message.guild.members.cache.get(target.id);
    if(!targetMember) {message.channel.send(`${config.err} **|** That user is not in this server`);return;};
    
    const user = message.author;
    if(user.id == target.id) {message.channel.send(`${config.err} **|** You cannot kick yourself`);return;};
    
    const perm = message.member.permissions.has(PermissionsBitField.Flags.KickMembers);
    if(!perm) {message.channel.send(`${config.err} **|** You dont have permission to use this command`);return;};
    
    await targetMember.kick().catch(err => {message.channel.send(`${config.err} **|** Unable to kick that user`)});
    await message.channel.send(`${config.done} **|** Kicked the user\n${config.blank} **|** Username: ${target.username}`);
  },
};