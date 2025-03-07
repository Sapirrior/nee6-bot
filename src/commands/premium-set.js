const settings = require('../configs/settings');
const Data = require('../configs/mongodb/Data');

module.exports = {
  name: 'premium-set',
  description: 'premium-set command',
  async execute(message, args) {
    
    if(message.author.id !== settings.owner) return;
    const guildid = message.guild.id;
    const data = await Data.findOne({ uid: guildid}) || await new Data({ uid: guildid, premium: false});
    data.premium = true;
    await data.save();
    message.channel.send(`${settings.premium} **| NEE6 Premium:** True`);
  },
};