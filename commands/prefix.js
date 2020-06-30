const db = require("quick.db")
const Discord = require("discord.js")
exports.run = async (message, client, args, cmd) => {
  let welcomeChannel = "m!"
  let fetchedChannelName = await db.fetch(`serverPrefix_${message.guild.id}`)
  if(fetchedChannelName === null) fetchedChannelName = welcomeChannel
  else welcomeChannel = fetchedChannelName

  let fail = new Discord.RichEmbed()
  .setColor("RED")
  .addField("Insufficent Permissions", "You require the permission: ``MANAGE SERVER``")
  
  
  if(message.author.id == process.env.OWNERID) {
 if(!args.join(" ")) return message.channel.send("This server's prefix is: " + welcomeChannel)
  
  db.set(`serverPrefix_${message.guild.id}`, args.join(" "))
  message.channel.send("prefix for ``" + message.guild.name + "`` has been set to: " + welcomeChannel)

  }
  else if(message.member.permissions.has("MANAGE_GUILD")) {
 if(!args.join(" ")) return message.channel.send("This server's prefix is: " + welcomeChannel)
  
  db.set(`serverPrefix_${message.guild.id}`, args.join(" "))
    message.channel.send("prefix for ``" + message.guild.name + "`` has been set to: " + welcomeChannel)
  } else {
   message.channel.send(fail) 
  }
}