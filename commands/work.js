const talkedRecently = new Set();
const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balance_${message.author.id}`)
  if(fetchedBal === null) fetchedBal = bal
  else bal = fetchedBal 
  
  let randomNumber = Math.floor(Math.random() * 500) + 1
  let random = Math.floor(Math.random() * 5 ) + 1
  let randomNumberDiamond = Math.floor(Math.random() * 50) + 1
  
  if (talkedRecently.has(message.author.id)) {
    let x = 86400000
    let error = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("**Please wait 2 minutes before using this command again**")
    message.channel.send(error);
    } else {
  
      if(random === 1 || random === 3 || random === 4 || random === 5) {
        
        db.add(`userInfo.balanceDiamond_${message.author.id}`, randomNumber)
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${message.author.tag}`, `${message.author.avatarURL}`)
    .setDescription(`You worked and got **$${randomNumber}**`)
   message.channel.send(embed) 
      } else if(random === 2) {
        const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");
        db.add(`userInfo.balanceDiamond_${message.author.id}`, randomNumberDiamond)
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${message.author.tag}`, `${message.author.avatarURL}`)
    .setDescription(`*Lucky Lucky* You worked and got **${ayy2}${randomNumberDiamond}**`)
   message.channel.send(embed) 
      }
      talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 120000);
    }
}