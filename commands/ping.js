let Discord = require("discord.js")
exports.run = (message, client, args, cmd) => {
  
let date = Math.round(client.ping) + "ms";
           let memberavatar = message.author.avatarURL
           let embed = new Discord.RichEmbed()
           .setColor("#008080") 
           .addField(":ping_pong: Pong!", "Sent in " + date)
           .setFooter("Requested by " + message.author.tag, memberavatar)
    //message.channel.send(":ping_pong: Pong! " + date); 
           message.channel.send(embed)
  
}

exports.help = {
   name: "ping",
   description: "Ping/Pong command.",
   usage: `m!ping`,
 };