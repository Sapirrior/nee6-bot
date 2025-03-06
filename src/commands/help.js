const settings = require('../configs/settings');
const utility = "`help ping`";
const fun = "`ship`";

module.exports = {
  name: 'help',
  description: 'help commamd',
  async execute(message) {
    
    const embed = {
      author: { name: message.author.usrrname, icon_url: message.author.displayAvatarURL },
      description: 'Here is the list of all commamds\nNeed more help on a specific command? Come join our guild',
      fields: [ { name: `🎲 Utility`, value: utility }, { name: '😀 Fun', value: fun } ],
      footer: { text: 'Example: .commandName'}
    };
    message.channel.send({embeds: [embed]})
  },
};