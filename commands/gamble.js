const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balance_${message.author.id}`)
  if(fetchedBal === null) fetchedBal = bal
  else bal = fetchedBal
  
  if(!args[0]) return message.channel.send("Please input a number to gamble")
  if(bal < args[0]) { let noMoney = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle("Not enough money")
message.channel.send(noMoney)
 } else if(bal >= args[0]) {
  let number = Math.floor(Math.random() *2 ) +1
  if(number == 1) {
   db.add(`userInfo.balance_${message.author.id}`, parseInt(args[0])).then(() => {
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField("Gamble", `${message.author.tag} Gambled $${args[0]} and **WON!**`)
    message.channel.send(embed)
   }) 
  } else if(number == 2) {
    db.subtract(`userInfo.balance_${message.author.id}`, parseInt(args[0])).then(() => {
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .addField("Gamble", `${message.author.tag} Gambled $${args[0]} and **LOST :sob:**`)
    message.channel.send(embed)
   }) 
  }
}
}