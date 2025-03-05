const emoji = '🏓';

module.exports = {
  name: 'ping',
  description: 'ping command',
  async execute(message) {
    message.channel.send(`${emoji} **|** ...pong! In ${message.client.ws.ping}ms`);
  },
};