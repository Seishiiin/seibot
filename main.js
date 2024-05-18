const Discord = require('discord.js');
const loadEvents = require('./loaders/loadEvents');
const loadCommands = require('./loaders/loadCommands');
const getToken = require('./config/getToken');
const intents = new Discord.IntentsBitField(3276799);
const client = new Discord.Client({intents: intents});

client.commands = new Discord.Collection();

client.login(getToken.getToken());
loadEvents(client);
loadCommands(client);