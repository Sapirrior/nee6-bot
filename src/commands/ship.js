const settings = require('../configs/settings')
const { combine } = require('../utils/shipUtil')

module.exports = {
  name: 'ship',
  description: 'ship command',
  async execute(message) {
    
    const name1 = message.author.username;
    
    const target = message.mentions.users.first();
    if(!target) {
      message.reply(`${settings.err} **|** Please mention someone!`);
      return;
    }
    
    const name2 = target.username;
    const name = combine(name1, name2);
    message.channel.send(`**${name1}** + **${name2}** = **${name}**`);
  },
};