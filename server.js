const Discord = require('discord.js')
const client = new Discord.Client()

const db = require('quick.db')


client.on("message", async message => {
 let prefix = "m!" 
 let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
 if(fetchedPrefix === null) fetchedPrefix = prefix
  else prefix = fetchedPrefix
  
  /*let blacklist = null
  let fetchedPeople = await db.fetch(`blacklist`)
  if(fetchedPeople === null) fetchedPeople = blacklist
  else blacklist = fetchedPeople
  
  if(blacklist.includes(`${message.author.id}`)) return*/
  
  let args = message.content.slice(prefix.length).trim().split(" ")
  let cmd = args.shift().toLowerCase()
  
  
  if(message.author.bot) return
  if(message.content == "<@519565520677371905>" || message.content == "<@!519565520677371905>") {
   message.reply("My prefix for this server is ``" + prefix + "``") 
  }
  if(!message.content.startsWith(prefix)) return
  try {
    //message.channel.send("My money database has been reset, I am sorry for the inconvenience. If you have any concerns")
    let commandFile = require(`./commands/${cmd}.js`)
    commandFile.run(message, client, args, cmd)
    
  } catch(e) {
   console.log(e.stack) 
  }
  
})

client.on("ready", () => {
  setInterval(function() {
    let statuses = [client.guilds.size + " servers", "microdiscord.weebly.com", "mention for prefix"]
    let status = statuses[Math.floor(Math.random()*statuses.length)]
 //client.user.setActivity(`${client.guilds.size} guilds`, {type: "WATCHING"}) 
    client.user.setActivity(status, {type: "WATCHING"})
}, 5000)
})

client.login(process.env.SECRET)