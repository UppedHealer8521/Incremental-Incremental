const Discord = require("discord.js")
const Decimal = require("../break_eternity.js")
var data = require('./gamedata.json')
const fs = require("fs")
const path = require("path")
function save() {fs.writeFileSync(path.resolve(__dirname, './gamedata.json'), JSON.stringify(data, null, "\t"))}
function cost1() {
  if (data.pUps["12"]) {
    return new Decimal(4).pow(data.upg1).times(9).round()
  }
  return new Decimal(4).pow(data.upg1).times(10).round()
}
function cost2() {
  if (data.pUps["13"]) {
    return new Decimal(6).pow(data.upg2).times(900).round()
  }
  return new Decimal(6).pow(data.upg2).times(1000).round()
}
function cost3() {
  return new Decimal(9).pow(data.upg3).times(10000).round()
}
function ppm() {
  if (data.pUps["11"]) {
    return new Decimal(2).pow(data.upg1).times(new Decimal(3).pow(data.upg2)).times(new Decimal(4).pow(data.upg3)).times(1.5).round()
  }
  return new Decimal(2).pow(data.upg1).times(new Decimal(3).pow(data.upg2)).times(new Decimal(4).pow(data.upg3)).round()
}
function ppg() {
  return new Decimal(data.points).div("1e6").sqrt().lower().min(1)
}
module.exports = {
	name: 'buy',
	description: 'Idk',
	execute(message, args) {
		if (args[0] == "upg1" && new Decimal(data.points).gte(cost1())) {
      data.points = new Decimal(data.points).sub(cost1()).toString()
      data.upg1 += 1
      var embed = new Discord.MessageEmbed().setColor("#e2313d").setTitle("Info").setDescription("Points per Message: " + ppm().toString())
      message.channel.messages.fetch(data.id).then((message) => message.edit(embed))
      message.channel.send("You have: " + data.points + " points")
    }
    if (args[0] == "upg2" && new Decimal(data.points).gte(cost2())) {
      data.points = new Decimal(data.points).sub(cost2()).toString()
      data.upg2 += 1
      var embed = new Discord.MessageEmbed().setColor("#e2313d").setTitle("Info").setDescription("Points per Message: " + ppm().toString())
      message.channel.messages.fetch(data.id).then((message) => message.edit(embed))
      message.channel.send("You have: " + data.points + " points")
    }
    if (args[0] == "upg3" && new Decimal(data.points).gte(cost3())) {
      data.points = new Decimal(data.points).sub(cost3()).toString()
      data.upg3 += 1
      var embed = new Discord.MessageEmbed().setColor("#e2313d").setTitle("Info").setDescription("Points per Message: " + ppm().toString())
      message.channel.messages.fetch(data.id).then((message) => message.edit(embed))
      message.channel.send("You have: " + data.points + " points")
    }
    if (args[0] == "u11" && new Decimal(data.prestigePoints).gte(1) && !data.pUps["11"]) {
      data.prestigePoints = new Decimal(data.prestigePoints).sub(1).toString()
      data.pUps["11"] = true
      var embed = new Discord.MessageEmbed().setColor("#e2313d").setTitle("Info").setDescription("Points per Message: " + ppm().toString())
      message.channel.messages.fetch(data.id).then((message) => message.edit(embed))
      message.channel.send("You have: " + data.prestigePoints + " prestige points")
    }
    if (args[0] == "u12" && new Decimal(data.prestigePoints).gte(1) && !data.pUps["12"]) {
      data.prestigePoints = new Decimal(data.prestigePoints).sub(1).toString()
      data.pUps["12"] = true
      var embed = new Discord.MessageEmbed().setColor("#e2313d").setTitle("Info").setDescription("Points per Message: " + ppm().toString())
      message.channel.messages.fetch(data.id).then((message) => message.edit(embed))
      message.channel.send("You have: " + data.prestigePoints + " prestige points")
    }
    if (args[0] == "u13" && new Decimal(data.prestigePoints).gte(1) && !data.pUps["13"]) {
      data.prestigePoints = new Decimal(data.prestigePoints).sub(1).toString()
      data.pUps["13"] = true
      var embed = new Discord.MessageEmbed().setColor("#e2313d").setTitle("Info").setDescription("Points per Message: " + ppm().toString())
      message.channel.messages.fetch(data.id).then((message) => message.edit(embed))
      message.channel.send("You have: " + data.prestigePoints + " prestige points")
    }
    if (args[0] == "prestige" && new Decimal(data.points).gte("1e6")) {
      data.prestigePoints = new Decimal(data.prestigePoints).add(ppg()).round().toString()
      data.prestigeTotal = new Decimal(data.prestigeTotal).add(ppg()).round().toString()
      data.points = "0"
      data.upg1 = 0
      data.upg2 = 0
      data.lastcount = 0
    }
    save()
	},
}
