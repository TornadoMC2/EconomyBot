const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (message, client, args, cmd) => {
  
  let prefix = "m!" 
 let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
 if(fetchedPrefix === null) fetchedPrefix = prefix
  else prefix = fetchedPrefix
  
 let hEmbed = new Discord.RichEmbed()
 .setColor('GREEN')
 .setTitle("Help Menu")
 /*.addField("Main Economy Commands", `\`${prefix}daily\` | \`${prefix}help\` | \`${prefix}diamond-daily\` | \`${prefix}badge-<badge #>\` | \`${prefix}shop\` | \`${prefix}ping\` | \`${prefix}work\``)
 .addField("Profile Related Commands", `\`${prefix}profile [user]\` | \`${prefix}description <description>\` | \`${prefix}+rep <user>\``)
 .addField("Owner Commands", `\`${prefix}eval <command>\``)*/
 .addField("Documentation", "Veiw the docs here \n https://microdiscord.weebly.com/#/")
 message.channel.send(hEmbed)
}