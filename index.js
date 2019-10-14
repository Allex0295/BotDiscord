const Discord = require('discord.js');
const bot = new Discord.Client();
const Google = require('./commands/google')

///Liste des messages
let InviteDiscord = new Discord.RichEmbed()
	.setDescription("INVITATION DU DISCORD")
	.setColor("#1CFF1C")
	.addField("Un","Deux")
	.addField("Trois","Quatre")
	.setFooter('Cest')

//instance
bot.on('ready', function () {
	bot.user.setActivity('Accueil du Discord');
})

bot.on('message', function(message) {
	if (Google.match(message)){
		return Google.action(message)
	} else {
		switch(message.content) {
			case '!pong' :
				message.channel.send('Pong!',user.ping)
			case '!help' :
				message.channel.send('ok Help'); break;
			case '!ts' :
				message.channel.send('ok TS'); break;
			case '!site' :
				message.channel.send(InviteDiscord); break;
			case '/join' :
				if (message.member.voicechannel){
					message.member.join()
						.then(connecion => {
							message.reply('Ok Join');
						})
				}
		}	
	}
	
})

bot.login(process.env.TOKEN)