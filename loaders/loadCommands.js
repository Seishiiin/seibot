const fs = require('fs')

module.exports = async client => {
    for (const file of fs.readdirSync("./commands").filter(f => f.endsWith(".js"))) {
        let command = require(`../commands/${file}`)

        if (!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, -3)} n'a pas de nom`)

        await client.commands.set(command.name, command)
        console.log(`Commande ${file} chargée avec succès !`)
    }

    console.log("\n")
}