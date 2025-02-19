const { Client, GatewayIntentBits, Events, SlashCommandBuilder } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({intents: GatewayIntentBits.Guilds});

client.once(Events.ClientReady, () => {
  console.log('Online!');
});

client.on(Events.InteractionCreate, async i => {
  if(!i.isChatInputCommand()) return;
  if(i.commandName !== 'meme') return;
  
  const memes = await axios.get('https://meme-api.com/gimme');
  const meme = memes.data.url;
  const title = memes.data.title;
  
  const embed = {
    author: {name: title},
    image: {url: meme}
  };
  i.reply({embeds: [embed]});
});

client.login(process.env.TOKEN);