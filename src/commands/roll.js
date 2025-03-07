const settings = require('../configs/settings');
const message = ['What a lucky day!','What a bad day...','Nice!','Oof','Oh no...','Yikes','Hurray!','Amazing!','Yes!','Oh!','Oh my.','Lucky!','Aw..','Booo..'];

module.exports = {
  name: 'roll',
  description: 'roll a 6-sided dice',
  async execute(message) {
    
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const dice = Math.floor(Math.random() * 6) + 1;
    const result = `${settings.blank} **|** ${msg} Its a **${dice}**!`;
    message.channel.send(`${settings.dice} **|** **${message.author.username}** rolls a 6-sided die\n${result}`);
  },
};