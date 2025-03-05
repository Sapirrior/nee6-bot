const { Events } = require('discord.js');
const prefix = '.';

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if(!message.client.commands.has(commandName)) return;
    const command = message.client.commands.get(commandName);
    await command.execute(message, args).catch(err => {
      console.log(err);
      message.reply('Error while executing the command');
    });
  },
};