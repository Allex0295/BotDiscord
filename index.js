const Discord = require('discord.js')
const bot = new Discord.Client()

///Liste des messages
let InviteDiscord = new Discord.RichEmbed()
	.setDescription("INVITATION DU DISCORD")
	.setColor("#1CFF1C")
	.addField("Un","Deux")
	.addField("Trois","Quatre")
	.setFooter('Cest')

//instance
bot.on('ready', function () {
	bot.user.setActivity('Accueil du Discord')
})

bot.on('message', function(message) {
	switch(message.content) {
		case '!help' :
			message.channel.send('ok Help'); break;
		case '!ts' :
			message.channel.send('ok TS'); break;
		case '!site' :
			message.channel.send(InviteDiscord); break;
	}
})
bot.login(process.env.TOKEN)

//bot.login('NjMzMjYyNjkxMzY4MTczNTc4.XaTgDQ.vFOJl68leNPAd4UJrgyDQKoJZao')
