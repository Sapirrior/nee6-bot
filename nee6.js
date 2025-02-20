const { Client, GatewayIntentBits, Events, PermissionsBitField } = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]});
require('dotenv').config();
const url = /(https?:\/\/[^\s]+)/;

// Load Client
client.once(Events.ClientReady, () => {
  console.log('online!');
});

// Find Links
client.on(Events.MessageCreate, async message => {
  
  if(message.author.bot) return;
  if(message.author.id === message.guild.ownerId) return;
  if(message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return;
  if(!url.test(message.content)) return;
  await message.delete().catch(err=> {});
});
client.login(process.env.TOKEN)
// AI URL Detection Is Not Available For Public