const modCmds = '`kick`';
const utilityCmds = '`help ship prefix meme`';

module.exports = {
  name: 'help',
  description: 'help command',
  async execute(message) {
    
    let embed = {
      color: 0x7fbbe7,
      author: {name: 'Command List'},
      description: 'Here is the list of all commands\nNeed more help? Come join our guild',
      fields: [{name: 'Moderation', value: modCmds}, {name: 'Utility', value: utilityCmds}]
    };
    message.channel.send({embeds: [embed]});
  },
};
