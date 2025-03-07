const settings = require('../configs/settings');
const Data = require('../configs/mongodb/Data');

module.exports = {
  name: 'premium',
  description: 'premium command',
  async execute(message) {
    
    const guildid = message.guild.id;
    const data = await Data.findOne({ uid: guildid });
    
    if(!data || data.premium === false) {
      message.channel.send(`${settings.premium} **|** **NEE6 Premium:** False`);
    } else {
      message.channel.send(`${settings.premium} **|** **NEE6 Premium:** True`);
    };
  },
};