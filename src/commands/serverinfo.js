const settings = require('../configs/settings');

module.exports = {
  name: 'serverinfo',
  description: 'serverinfo command',
  async execute(message) {
    
    const guild = message.guild
    const owner = await guild.fetchOwner()
    const info = `**Server Name:** ${guild.name}\n**Owner:** ${owner.user.tag}\n**Total Members:** ${guild.memberCount}\n**Created On:** ${guild.createdAt.toUTCString()}\n**Server ID:** ${guild.id}\n**Boost Level:** ${guild.premiumTier || 'None'}\n**Verification Level:** ${guild.verificationLevel}`;
    const embed = { color: 0x7fbbe7, author: { name: 'Server Info' }, description: info, timestamp: new Date().toISOString() };
    message.channel.send({embeds: [embed]})
  },
};