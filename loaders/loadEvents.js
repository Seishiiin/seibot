const fs = require('fs')

module.exports = async client => {
    for (const file of fs.readdirSync("./events").filter(f => f.endsWith(".js"))) {
        let event = require(`../events/${file}`)

        client.on(file.split(".js").join(""), event.bind(null, client))
        console.log(`Événement ${file.split(".js").join("")} chargé avec succès !`)
    }

    console.log("\n")
}