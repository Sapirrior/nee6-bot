const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'reload',
    description: 'Reloads all prefix commands',
    execute(message, args) {
        // Check if the user has permission (e.g., bot owner only)
        if (message.author.id !== '1148948261395255398') {
            return message.reply('Only the bot owner can use this command!');
        }

        // Clear existing commands
        message.client.commands = new Collection();
        
        // Read command files from the same directory
        const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));

        // Load commands
        for (const file of commandFiles) {
            try {
                // Delete the cache of the command file
                delete require.cache[require.resolve(`${__dirname}/${file}`)];
                
                // Require the fresh version of the command
                const command = require(`${__dirname}/${file}`);
                
                // Set the command in the collection using message.client
                message.client.commands.set(command.name, command);
                
                console.log(`Reloaded command: ${command.name}`);
            } catch (error) {
                console.error(`Error reloading ${file}:`, error);
                message.reply(`Failed to reload ${file}`);
            }
        }
        message.reply('All commands have been reloaded successfully!');
    }
};