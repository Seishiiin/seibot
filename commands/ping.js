const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Renvoie la latence du bot',
    permission: "Aucune",
    dm: true,

    async run(client, message) {
        await message.reply('Ping : ' + client.ws.ping + 'ms')
    }
}