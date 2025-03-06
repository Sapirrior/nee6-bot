const settings = require('../configs/settings');
const moderation = "``````";
const utility = "```help ping```";
const fun = "```ship```";

module.exports = {
  name: 'help',
  description: 'help commamd',
  async execute(message) {
    
    const embed = {
      author: { name: message.author.username, icon_url: message.author.avatarURL },
      description: 'Here is the list of all commamds\nNeed more help on a specific command?\nCome join our guild',
      fields: [ { name: "Moderation", value: moderation }, { name: "Utility", value: utility }, { name: "Fun", value: fun } ],
      footer: { text: 'Example: .commandName'}
    };
    message.channel.send({embeds: [embed]})
  },
};