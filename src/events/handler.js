const { Events } = require('discord.js');
require('dotenv').config();

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if(message.author.bot) return;
    
    const prefix = process.env.PREFIX;
    
    if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
      
      if(!message.client.commands.has(commandName)) return;
      const command = message.client.commands.get(commandName);
      
      try {
        await command.execute(message, args);
      } catch (error) {
        console.log(error);
        message.channel.send(`${process.env.ERR} **|** Error while executing the command`)
      };
    };
  },
};