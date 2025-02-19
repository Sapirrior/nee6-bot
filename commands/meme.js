const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('meme')
  .setDescription('See top memes from internet')
  .setIntegrationTypes(1)
  .setContexts(0, 1, 2),
  async execute(interaction) {
    const memes = await axios.get('https://memes-api.com/gimme');
    const title = memes.data.title;
    const meme = memes.data.url;
    
    let embed = {
      color: 0x7fbbe7,
      author: {name: title},
      image: {url: meme}
    };
    interaction.reply({embeds: [embed]});
  },
};