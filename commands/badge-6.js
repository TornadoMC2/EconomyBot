const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  const ayy = client.emojis.find(emoji => emoji.name === "microcheck");
  const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");
  let diamondbal = 0
  let diamondfetchedBal = await db.fetch(`userInfo.balanceDiamond_${message.author.id}`)
  if(diamondfetchedBal === null) diamondfetchedBal = diamondbal
  else diamondbal = diamondfetchedBal
  
  let items = null
  let fetchedItems = await db.fetch(`userInfo.items_${message.author.id}`)
  if(fetchedItems === null) fetchedItems = items
  else items = fetchedItems
  if(!items.includes("Train")) {
  if(diamondbal < 1000) {
  let noMoney = new Discord.RichEmbed()
.setColor("RED")
.setTitle("Not enough money")
message.channel.send(noMoney)
  } else if(diamondbal >= 1000) {
    db.subtract(`userInfo.balanceDiamond_${message.author.id}`, 1000)
    db.push(`userInfo.items_${message.author.id}`, "Train")
    let purchased = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${ayy} Purchase Successful`)
    .setDescription("Bough badge ``Train`` - :steam_locomotive:")
    message.channel.send(purchased)
  }
  } else {
   message.channel.send("Item already bought") 
  }
}