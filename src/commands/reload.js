const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = {
  name: 'reload',
  description: 'Reload all commands',
  
  async execute(message) {
    const allowedUserId = '1148948261395255398'; // Replace with the actual user ID

    if (message.author.id !== allowedUserId) {
      return message.reply(`${process.env.ERR} **|** You are not allowed to use this command`);
    }

    const commandFiles = fs.readdirSync(path.join(__dirname)).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      delete require.cache[require.resolve(`./${file}`)];
      const command = require(`./${file}`);
      message.client.commands.set(command.name, command);
    }

    await message.reply(`${process.env.DONE} **|** All commands have been reloaded`);
  },
};