const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
  let user = message.author.id
  
  let items = null
  let fetchedItems = await db.fetch(`userInfo.items_${user.id}`)
  if(fetchedItems === null) fetchedItems = items
  else items = fetchedItems
  
  const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");
  
  let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balance_${message.author.id}`)
  if(fetchedBal === null || fetchedBal === undefined) fetchedBal = bal
  else bal = fetchedBal 
  
  let diamondbal = 0
  let diamondfetchedBal = await db.fetch(`userInfo.balanceDiamond_${message.author.id}`)
  if(diamondfetchedBal === null || diamondfetchedBal === undefined) diamondfetchedBal = diamondbal
  else diamondbal = diamondfetchedBal 
  
  let prefix = "m!" 
 let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
 if(fetchedPrefix === null) fetchedPrefix = prefix
  else prefix = fetchedPrefix
  
  let description = `Get a description by using \`${prefix}description <description>\``
  let fetchedDesc = await db.fetch(`userInfo.description_${message.author.id}`)
  if(fetchedDesc === null || fetchedDesc === undefined) fetchedDesc = description
  else description = fetchedDesc
    
  let rep = 0
  let fetchedrep = await db.fetch(`userInfo.rep_${message.author.id}`)
  if(fetchedrep === null || fetchedrep === undefined) fetchedrep = rep
  else rep = fetchedrep
  
  let balanceMessage = new Discord.RichEmbed()
  .setColor("BLUE")
  .addField("Money", `$${bal}`)
  .addField("Diamonds", `${ayy2}${diamondbal}`)
  message.channel.send(balanceMessage)
  
}