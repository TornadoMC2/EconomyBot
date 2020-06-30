const talkedRecently = new Set();
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (message, client, args, cmd) => {
      const ayy = client.emojis.find(emoji => emoji.name === "microcheck");
  const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");

 if(message.author.id == process.env.OWNERID) {
   let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balanceDiamond_${message.author.id}`)
  if(fetchedBal === null) fetchedBal = bal
  else bal = fetchedBal 
   
   let prefix = "m!" 
 let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
 if(fetchedPrefix === null) fetchedPrefix = prefix
  else prefix = fetchedPrefix
   
  db.add(`userInfo.balanceDiamond_${message.author.id}`, 50)
   let addedEmbed = new Discord.RichEmbed()
   .setColor("#ffffff")
   .setTitle("Daily Reward")
   .setDescription(`${ayy} ${ayy2}50 has been added to your account (${prefix}profile to view your profile)`)
   message.channel.send(addedEmbed) 
  }
  
  else if (talkedRecently.has(message.author.id)) {
            message.channel.send("Please wait 48 hours before using this command again");
    } else {

           let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balanceDiamond_${message.author.id}`)
  if(fetchedBal === null) fetchedBal = bal
  else bal = fetchedBal 
      
      let prefix = "m!" 
 let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
 if(fetchedPrefix === null) fetchedPrefix = prefix
  else prefix = fetchedPrefix
      
  db.add(`userInfo.balanceDiamond_${message.author.id}`, 50)
   let addedEmbed = new Discord.RichEmbed()
   .setColor("#ffffff")
   .setTitle("Daily Reward")
   .setDescription(`${ayy} ${ayy2}50 has been added to your account (${prefix}profile to view your profile)`)
   message.channel.send(addedEmbed)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 172800000);
    }
  
}