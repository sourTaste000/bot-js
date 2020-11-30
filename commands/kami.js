const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
                .setTitle(`KAMI vs KAMI Blue`)
                .setDescription(`KAMI and KAMI Blue are vastly different.\n\nFor users, the main differences are:\n- KAMI is **1.16.x Fabric** and KAMI Blue is **1.12.2 Forge**\n- The GUI's are entirely different, both functionally and aesthetically\n- KAMI Blue has more features, but is limited to older versions.\nYou can get KAMI at https://discord.gg/9hvwgeg`)
                .setColor(client.colors.kamiblue)
                .setTimestamp();
    message.channel.send(embed)
}

module.exports.config = {
    name: "kami",
    aliases: ["kami"],
    use: "kami",
    description: "Differences between KAMI and KAMI Blue",
    state: "gamma",
    page: 2
};
