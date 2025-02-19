const config = require('../data/config');
const axios = require('axios');

module.exports = {
  name: 'meme',
  description: 'Meme command',
  async execute(message) {
    
    const response = await axios.get('https://meme-api.com/gimme');
    const title = response.data.title;
    const meme = response.data.url;
    
    const embed = {
      color: 0x7fbbe7,
      author: { name: title },
      image: { url: meme },
      footer: { text: 'See top memes from internet!' }
    };
    
    message.channel.send({ embeds: [embed] });
  },
};