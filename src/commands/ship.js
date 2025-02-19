const { combinename } = require('../utils/shipUtil');
require('dotenv').config()

module.exports = {
  name: 'ship',
  description: 'Ship command!',
  async execute(message) {
    const mention = message.mentions.users.first()
    if(!mention) {message.channel.send(`${process.env.ERR} **|** Mention someone`); return;}
    
    const name1 = message.author.displayName || message.member.username;
    const name2 = mention.displayName || mention.username;
    const result = combinename(name1, name2);
    message.channel.send(`**${name1}** + **${name2}** **=** ${result}`);
  },
};