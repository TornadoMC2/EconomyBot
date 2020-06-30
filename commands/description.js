const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  const ayy = client.emojis.find(emoji => emoji.name === "microcheck");
  const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");
  let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balance_${message.author.id}`)
  if(fetchedBal === null) fetchedBal = bal
  else bal = fetchedBal 
  
  let prefix = "m!" 
  let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
  if(fetchedPrefix === null || fetchedPrefix === undefined) fetchedPrefix = prefix
  else prefix = fetchedPrefix
  
  let error = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Missing Parameters")
  .setDescription(`Correct usage: \`${prefix}description <text here>\``)
  
  if(!args[0]) return message.channel.send(error)
  
  if(bal < 100) {
   let noMoney = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Not enough money")
    message.channel.send(noMoney)
  } else if (bal >= 100) {
    db.subtract(`userInfo.balance_${message.author.id}`, 100)
  await db.set(`userInfo.description_${message.author.id}`, args.join(" "))
    let success = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${ayy} Success!`)
    .setDescription("Description set to ``" + args.join(" ") + "``")
    message.channel.send(success)
  }
                                                                    
}