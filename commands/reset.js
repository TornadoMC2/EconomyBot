const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
let fail = new Discord.RichEmbed()
.setColor("RED")
.addField("Insufficent Permissions", "You require the permission: ``BOT OWNER``")

if(!message.user.id === process.env.OWNERID) return message.channel.send(fail)

client.user.setActivity("Reseting...", {type: "STREAMING"})
  message.channel.send("Resetting")
  .then((msg) => { msg.delete(500).then(() => {client.destroy()
              .then(() => {
 client.login(process.env.SECRET).then(() => {
  message.channel.send("Sucessfully reset bot").then(msg => {
   msg.delete(2000) 
  }) 
 })
})
})
})
}