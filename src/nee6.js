const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const connectDB = require('../configs/database');
const config = require('../configs/config');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Load All Commands
client.commands = new Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const commands = require(`./commands/${file}`);
  if (Array.isArray(commands)) {
    for (const command of commands) {
      client.commands.set(command.name, command);
    }
  } else {
    client.commands.set(commands.name, commands);
    }
}

// Load Client
client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Connect Database
connectDB();

// Command Handler
client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    const guildId = message.guild.id;
    const prefix = config.prefix || '.';

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);
        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply(`${config.err} **|** Error while executing the command.`);
        };
    };
});

// Login Bot
client.login(process.env.TOKEN)