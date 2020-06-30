const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (message, client, args, cmd) => {

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.tag;
    let aicon = message.author.avatarURL;

  if(!args[0]) return message.channel.send("Please provide a number to bet!")
  if(isNaN(args[0])) return message.channel.send("Please provide a valid number to bet")
  
    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3] + `\n \n You won $${args[0]}`, true)
            .setColor("#08000");
        message.channel.send(wEmbed)
      .then(() => {
          db.add(`userInfo.balance_${message.author.id}`, parseInt(args[0]))
        })
    }   else if(slots[result1] && slots[result2] === slots[result3]) {
            let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3] + `\n \n You won $${args[0]}`, true)
            .setColor("#08000");
        message.channel.send(wEmbed)
      .then(() => {
          db.add(`userInfo.balance_${message.author.id}`, parseInt(args[0]))
        })    
      } else if(slots[result1] === slots[result3] && slots[result2]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3] + `\n \n You won $${args[0]}`, true)
            .setColor("#08000");
        message.channel.send(wEmbed)
      .then(() => {
          db.add(`userInfo.balance_${message.author.id}`, parseInt(args[0]))
        })
      } else if(slots[result1] === slots[result2] === slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3] + `\n \n You won $${args[0]}`, true)
            .setColor("#08000");
        message.channel.send(wEmbed)
      .then(() => {
          db.add(`userInfo.balance_${message.author.id}`, parseInt(args[0]))
        })
      }else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3] + `\n \n You lost $${args[0]}`, true)
            .setColor("RED");
        message.channel.send(embed)
      .then(() => {
         db.subtract(`userInfo.balance_${message.author.id}`, parseInt(args[0])) 
        })
    } 
}