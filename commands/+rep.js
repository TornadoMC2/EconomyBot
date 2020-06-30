const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  let rep = 0
  let fetchedrep = await db.fetch(`userInfo.rep_${message.author.id}`)
  if(fetchedrep === null) fetchedrep = rep
  else rep = fetchedrep
  
  let items = null
  let fetchedItems = await db.fetch(`userInfo.items_${message.author.id}`)
  if(fetchedItems === null) fetchedItems = items
  else items = fetchedItems
  
  let prefix = "m!" 
  let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
  if(fetchedPrefix === null || fetchedPrefix === undefined) fetchedPrefix = prefix
  else prefix = fetchedPrefix
  
  let error = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Missing Parameters")
  .setDescription(`Correct usage: \`${prefix}+rep <user>\``)
  
  let user = message.mentions.users.first()
  
  let alreadyRepped = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Failed")
  .setDescription(`You have already given +1 reputation to <@${user.id}>`)
  
  
  if(!user) {
   message.channel.send(error)
  } else {
    if(items.includes(`reped_${user.id}`)) {
     message.channel.send(alreadyRepped) 
    } else {
      let uparrow = client.emojis.find(emoji => emoji.name === "uparrow");
      db.push(`userInfo.items_${message.author.id}`, `reped_${user.id}`)
      db.add(`userInfo.rep_${user.id}`, 1)
      let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .addField(`${uparrow} +REP for`, `<@${user.id}>`)
      message.channel.send(embed)
    }
  }
}