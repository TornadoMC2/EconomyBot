const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  const ayy = client.emojis.find(emoji => emoji.name === "microcheck");
  const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");
  let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balance_${message.author.id}`)
  if(fetchedBal === null) fetchedBal = bal
  else bal = fetchedBal 
  
  let items = null
  let fetchedItems = await db.fetch(`userInfo.items_${message.author.id}`)
  if(fetchedItems === null) fetchedItems = items
  else items = fetchedItems
  console.log(items)
  if(!items.includes("Bike")) {
  if(bal < 10000) {
   let noMoney = new Discord.RichEmbed()
.setColor("RED")
.setTitle("Not enough money")
message.channel.send(noMoney)
  } else if(bal >= 10000) {
    db.subtract(`userInfo.balance_${message.author.id}`, 10000)
    db.push(`userInfo.items_${message.author.id}`, "Bike")
    let purchased = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${ayy} Purchase Successful`)
    .setDescription("Bough badge ``Bike`` - :bike:")
    message.channel.send(purchased)
  }
  } else {
   message.channel.send("Item already bought") 
  }
}