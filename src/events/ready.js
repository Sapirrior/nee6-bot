const { Events, ActivityType } = require('discord.js');
const connectDB = require('../../../configs/database');

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    const guilds = client.guilds.cache.size;
    connectDB(); // Connect Database
    console.log('Online');
    client.user.setActivity(`with ${guilds} guilds`, {
      type: ActivityType.Streaming,
      url: 'https://www.twitch.tv/sapirrior'
    });
  },
};