const settings = require('../configs/settings');
const message = ['What a lucky day!','What a bad day...','Nice!','Oof','Oh no...','Yikes','Hurray!','Amazing!','Yes!','Oh!','Oh my.','Lucky!','Aw..','Booo..'];

module.exports = {
  name: 'roll',
  description: 'roll a 6-sided dice',
  async execute(message) {
    
    const sides = 6;
    const result = Math.ceil(sides * Math.random());
    result = `${settings} **|** ${message[Math.trunc(Math.random() * message.length)]} Its a **${result}**!`;
    await message.channel.send(`${settings.dice} **|** **${message.author.username}** rolls a 6-sided die\n${result}`);
  },
};