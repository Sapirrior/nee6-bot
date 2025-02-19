const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  execute(client) {
    console.log(`Logged In As ${client.user.tag}`);
    const servers = client.guilds.cache.size;
    client.user.setActivity(`with ${servers} servers!`, {
      type: ActivityType.Streaming,
      url: 'https://www.twitch.tv/sapirrior'
    });
  },
};