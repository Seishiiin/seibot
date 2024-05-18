const Discord = require('discord.js');
const loadSlashCommands = require('../loaders/loadSlashCommands');

module.exports = async client => {
    await loadSlashCommands(client)
    console.log(`Connecté en tant que ${client.user.tag} sur ${client.guilds.cache.size} serveurs pour un total de ${client.users.cache.size} utilisateurs`);
}