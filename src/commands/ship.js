const config = require('../data/config')
const { combinename } = require('../utils/shipUtil');

module.exports = {
  name: 'ship',
  description: 'Ship command!',
  async execute(message) {
    const mention = message.mentions.users.first()
    if(!mention) {message.channel.send(`${config.err} **|** Mention someone`); return;}
    
    const name1 = message.author.displayName || message.member.username;
    const name2 = mention.displayName || mention.username;
    const result = combinename(name1, name2);
    message.channel.send(`**${name1}** + **${name2}** **=** ${result}`);
  },
};