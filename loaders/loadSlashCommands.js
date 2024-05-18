const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

module.exports = async client => {
    let commands = []

    client.commands.forEach(command => {
        let slashCommands = new Discord.SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description)
            .setDMPermission(command.dm)
            .setDefaultMemberPermissions(command.permission === "Aucune" ? null : command.permission)

        if (command.options?.length > 0) {
            for (let i = 0; i < command.options.length; i++) {
                slashCommands[`add${command.options[i].type.slice(0, 1).toLowerCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => {
                    option.setName(command.options[i].name)
                    option.setDescription(command.options[i].description)
                    option.setRequired(command.options[i].required)
                })
            }
        }

        commands.push(slashCommands)
    })

    const rest = new REST({ version: '10' }).setToken(client.token);

    await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands },
    );

    console.log('Toutes les commandes slash ont été chargées avec succès ! \n');
}