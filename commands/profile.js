const db = require("quick.db")
const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
  
  let user = message.mentions.users.first()
  
  
  if(!user) {
    
    db.push(`userInfo.items_${message.author.id}`, "profile")
    
    let items = null
  let fetchedItems = await db.fetch(`userInfo.items_${message.author.id}`)
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
 if(fetchedPrefix === null || fetchedPrefix === undefined) fetchedPrefix = prefix
  else prefix = fetchedPrefix
    
  let description = `Get a description by using \`${prefix}description <description>\``
  let fetchedDesc = await db.fetch(`userInfo.description_${message.author.id}`)
  if(fetchedDesc === null || fetchedDesc === undefined) fetchedDesc = description
  else description = fetchedDesc
    
    let rep = 0
  let fetchedrep = await db.fetch(`userInfo.rep_${message.author.id}`)
  if(fetchedrep === null || fetchedrep === undefined) fetchedrep = rep
  else rep = fetchedrep
  
    
    if(message.author.id == "425624104901541888") {
      const microteam = client.emojis.find(emoji => emoji.name === "Microteam");
      let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive: | " + microteam + " | :taco: | :crown:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
      .addField("Reputation", rep)
  
  message.channel.send(embed)
    } else if(message.author.id == "519210018583609365" || message.author.id == "428905159515701249") {
      const microteam = client.emojis.find(emoji => emoji.name === "Microteam");
      let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive: | " + microteam + " | :taco:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
      .addField("Reputation", rep)
  
  message.channel.send(embed)
    } else if(message.author.id == "474228950541926400" || message.author.id == "481907437746782226" || message.author.id == "440272572630695936") {
      let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive: | :taco:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
      .addField("Reputation", rep)
  
  message.channel.send(embed)
    } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike") && items.includes("Car") && items.includes("Star") && items.includes("Train")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike") && items.includes("Car") && items.includes("Star")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike") && items.includes("Car")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike:")
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover:")
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream:")
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(!items.includes("Ice-cream") && !items.includes("Clover") && !items.includes("Bike") && !items.includes("Car")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
  .setColor("BLUE")
  .setTitle(`${message.author.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", `No badges, do \`${prefix}shop\` to veiw some options`)
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
    
    message.channel.send(embed)
  } 
} else {
  
  db.push(`userInfo.items_${user.id}`, "profile")
  
 let items = null
  let fetchedItems = await db.fetch(`userInfo.items_${user.id}`)
  if(fetchedItems === null) fetchedItems = items
  else items = fetchedItems
  
  const ayy2 = client.emojis.find(emoji => emoji.name === "Diamondcurrency");
  let bal = 0
  let fetchedBal = await db.fetch(`userInfo.balance_${user.id}`)
  if(fetchedBal === null || fetchedBal === undefined) fetchedBal = bal
  else bal = fetchedBal 
  
  let diamondbal = 0
  let diamondfetchedBal = await db.fetch(`userInfo.balanceDiamond_${user.id}`)
  if(diamondfetchedBal === null || diamondfetchedBal === undefined) diamondfetchedBal = diamondbal
  else diamondbal = diamondfetchedBal 
  
  let prefix = "m!" 
 let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`)
 if(fetchedPrefix === null) fetchedPrefix = prefix
  else prefix = fetchedPrefix
  
  let description = `Get a description by using \`${prefix}description <description>\``
  let fetchedDesc = await db.fetch(`userInfo.description_${user.id}`)
  if(fetchedDesc === null || fetchedDesc === undefined) fetchedDesc = description
  else description = fetchedDesc
    
  let rep = 0
  let fetchedrep = await db.fetch(`userInfo.rep_${user.id}`)
  if(fetchedrep === null || fetchedrep === undefined) fetchedrep = rep
  else rep = fetchedrep
  
  if(user.id == "425624104901541888") {
      const microteam = client.emojis.find(emoji => emoji.name === "Microteam");
      let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive: | " + microteam + " | :taco: | :crown:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
      .addField("Reputation", rep)
  
  message.channel.send(embed)
    } else if(user.id == "519210018583609365" || user.id == "428905159515701249") {
      const microteam = client.emojis.find(emoji => emoji.name === "Microteam");
      let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive: | " + microteam + " | :taco:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
      .addField("Reputation", rep)
  
  message.channel.send(embed)
    } else if(user.id == "474228950541926400" || user.id == "481907437746782226" || user.id == "440272572630695936") {
      let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive: | :taco:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
  .addField("Reputation", rep)
      
  message.channel.send(embed)
    }
    
 else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike") && items.includes("Car") && items.includes("Star") && items.includes("Train")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star: | :steam_locomotive:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike") && items.includes("Car") && items.includes("Star")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi: | :star:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike") && items.includes("Car")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike: | :taxi:")
  .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover") && items.includes("Bike")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover: | :bike:")
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream") && items.includes("Clover")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream: | :four_leaf_clover:")
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(items.includes("Ice-Cream")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", ":ice_cream:")
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
  
  message.channel.send(embed)
  } else if(!items.includes("Ice-cream") && !items.includes("Clover") && !items.includes("Bike") && !items.includes("Car")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
  .setColor("BLUE")
  .setTitle(`${user.tag}'s Profile`)
    .setDescription(description)
  .addField("Badges:", `No badges, do \`${prefix}shop\` to veiw some options`)
    .addField("Currency Balance", `$${bal}`)
  .addField("Diamond Balance", `${ayy2}${diamondbal}`)
    .addField("Reputation", rep)
    
    message.channel.send(embed)
  }  
}

}