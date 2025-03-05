const config = require('../../../configs/config');
const { combine } = require('../utils/shipUtil')

module.exports = {
  name: 'ship',
  description: 'ship command',
  async execute(message) {
    
    const name1 = message.member.displayName || message.author.username;
    
    const target = message.mentions.users.first();
    if(!target) {
      message.reply(`${config.err} Please mention someone!`);
      return;
    }
    
    const name2 = target.member.displayName || target.username;
    const name = combine(name1, name2);
    message.channel.send(`**${name1}** + **${name2}** = **${name}**`);
  },
};