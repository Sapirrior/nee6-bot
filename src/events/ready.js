const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    const guilds = client.guilds.cache.size;
    console.log('Online');
    client.user.setActivity(`with ${guilds} guilds`, {
      type: ActivityType.Streaming,
      url: 'https://www.twitch.tv/sapirrior'
    });
  },
};