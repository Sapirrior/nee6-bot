const settings = require('../configs/settings');
const msgs = ['I choose ?!','I like ?!','I love ?!','? is the best choice','definitely ?!','? 100%'];

module.exports = {
  name: 'choose',
  description: 'choose commamd',
  async execute(message, args) {
    
    if(args.length == 0) {
      message.reply(`${settings.err} **|** .choose <item_1>,<item_2>...`);
      return;
    };
    const items = args.join(' ').replace(/[,;]/gi, '|').split('|');
    if(items.length == 1) {
      message.reply(`${settings.err} **|** I cannot choose from one item`);
      return;
    };
    
    let item = items[Math.floor(Math.random() * items.length)];
		let msg = ', ' + msgs[Math.floor(Math.random() * msgs.length)].replace('?', '**' + item + '**');
		message.channel.send(`${settings.dice} **|** **${message.author.username}**${msg}`);
  },
};