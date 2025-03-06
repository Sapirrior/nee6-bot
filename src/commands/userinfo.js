const settings = require('../configs/settings');

module.exports = {
  name: 'userinfo',
  description: 'userinfo command',
  async execute(message, args) {
    const target = message.mentions.users.first();
    if(!target) {
      message.reply(`${settings.err} **|** Please mention someone`)
      return;
    };
    
    const member = message.guild.members.cache.get(target.id);
    if(!member) {
      message.reply(`${settings.err} **|** The mentioned user is not in this server`);
      return;
    };
    
    const roles = member.roles.cache.filter(role => role.id !== message.guild.id).map(role => role.name).join(', ') || 'None';
    const info = `**User:** ${target.tag}\n**ID:** ${target.id}\n**Joined Discord:** ${target.createdAt}\n**Joined Server:** ${member.joinedAt}\n**Roles:** ${roles}`;
    const embed = { color: 0x7fbbe7, author: { name: 'User Info' }, description: info, timestamp: new Date().toISOString() };
    message.channel.send({embeds: [embed]})
  },
};