const settings = require('../configs/settings');
const moderation = "```warn slowmode lock unlock clear hide unhide```";
const utility = "```help ping avatar serverinfo userinfo say premium jumbo```";
const fun = "```ship meme choose roll```";

module.exports = {
  name: 'help',
  description: 'help command',
  async execute(message) {
    
    const embed = {
      color: 0x7fbbe7,
      author: { name: "Command List" },
      description: `Here is the list of all commands\nNeed more help on a specific command?\nCome join our [guild](${settings.guildlink})`,
      fields: [ { name: "Moderation", value: moderation }, { name: "Utility", value: utility }, { name: "Fun", value: fun } ],
      footer: { text: 'Example: .commandName'}
    };
    message.channel.send({embeds: [embed]})
  },
};