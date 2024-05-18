const Discord = require('discord.js');
const client = new Discord.Client({intents: 3276799});

client.on('ready', () => {
    console.log(`${client.user.tag} est connecté sur ${client.guilds.cache.size} serveurs!`);
})

client.login('MTI0MTM1MTE5NDYyMjk1MTUyNA.GL-5BF.nxGW86QjRVi64GTTOrl9gfjvqj_Dp40e5S4rVM');