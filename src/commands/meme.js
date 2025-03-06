const settings = require('../configs/settings');
const axios = require('axios');

module.exports = {
  name: 'meme',
  description: 'meme command',
  async execute(message) {
    
    const memes = axios.get('https://meme-api.com/gimme').catch(err => {});
    const meme = memes.data.url;
    const title = memes.data.title;
    
    embed = {
      color: 0x7fbbe7,
      author: { name: title },
      image: { url: meme }
    };
    message.channel.send({embeds: [embed]});
  },
};