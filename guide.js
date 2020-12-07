const Discord = require('discord.js');
module.exports = {
	name: 'guide',
	description: 'Idk',
	execute(message, args) {
    
    if (args[0] == "2") {
      var embed = new Discord.MessageEmbed().setTitle("Guide - Challenges").setDescription("Use !guide [page] to switch pages. There are currently two other pages, and you're currently viewing page **two**.\n**Challenges**\n> When you unlock u24, you might see another channel called #challenges. Challenges are slightly harder variants of the game, and while most stuff may be nerfed, therefore resulting in the game getting harder, once you complete it you get a reward.")
      message.channel.send(embed)
      }else if (args[0]=="1"){
        var embed = new Discord.MessageEmbed().setTitle("Guide - Prestige Layer 1").setDescription("Use !guide [page] to switch pages. There are currently two other pages, and you're currently viewing page **one**.\n**Prestige**\n> After you reach 1,000,000, you start to see you are suddenly hardcapped. How do you fix that? Well, you just prestige! It earns you Prestige Points, which you can spend on Prestige Upgrades.\n**Prestige Upgrades**\n> After prestiging for the first time, you may notice three Prestige Upgrades are available. It's recommended to start with the first Prestige Upgrade, because that multiplies your point gain by 1.5. Then you should buy the Tripler 10% less cost upgrade and Doubler 10% less cost upgrade. After that you can spend whatever you want. If you're unhappy that you bought the wrong upgrade, you can always refund your prestige points (ALL of them). Just say refund in chat.")
     message.channel.send(embed);
        }
    else {var embed = new Discord.MessageEmbed().setTitle("Guide - Prestige Layer 0").setDescription("Use !guide [page] to switch pages. There are currently two other pages, and you're currently viewing page **zero**.\n> **Welcome to Incremental Incremental!**\n> Incremental Incremental is a game about counting numbers, but there is a twist, as you can buy upgrades. There are also prestige layers with various upgrades that will speed up previous prestige layers, as if this was an actual Incremental game.\n**Points**\n> Points are the main currency in Incremental Incremental. But you might ask, how to gain them? Well, it's simple, you count like you would if you were in a #counting server (for example, 1, 2, 3, 4, 5, etc.), but the points per message decides how much you count. Remember, you can NEVER ever count twice in a row.\n**Upgrades**\n> The Doubler and Tripler are the main upgrades in Incremental Incremental. The Doubler doubles your points per message, while taking away some of your points, depending on its cost. Its base cost is 10 points, but every time you buy it its cost will quadruple. One of the first prestige upgrades cheapen the Doubler's cost by 10%.\n> The Tripler triples your points per message, while also taking away some of your points, depending on its cost. Its base cost is 1,000 points, and every time you buy it its cost sextuples (multiplies by five). The Tripler's cost can also be reduced by a prestige upgrade that cheapens it by 10%.").setColor("#e2313d")
		 message.channel.send(embed);}
	},
};
