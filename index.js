const Discord = require('discord.js')
const bot = new Discord.Client()

const Gamepedia = require('./commands/gamepedia')
const Ping = require('./commands/ping')

const Chan = new Discord.Channel()

const d1_text = '633778541258997781'
const d2_text = '633778619868512286'
const D1_Vocal = '633778922584277022'
const D2_Vocal = '633778959569518613'

const Role_Admin = '633426929080336415'
const Role_Modo = '633426929080336415'

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
	console.log("Bot Ready!")
})
bot.on('voiceStateUpdate', (oldMember, newMember) => {
	let newUserChannel = null
	newUserChannel = newMember.voiceChannelID
	
	let oldUserChannel = null
	oldUserChannel = oldMember.voiceChannelID

	//console.log("Old " + oldUserChannel)

	if (oldUserChannel === null && newUserChannel !== null) {
		console.log("1")
		switch (newUserChannel) {
			case D1_Vocal :
				bot.message.newUserChannel.addRole(Role_Admin)
				.then(console.log)
  				.catch(console.error);
				//return console.log("Rejoint le channel D1")
			case D2_Vocal :
				//return console.log("Rejoint le channel D2")
		}
	} else if (oldUserChannel !== null && newUserChannel !== null) {
		console.log("2")
	 	switch (oldUserChannel) {
			case D1_Vocal :
				//return console.log("Quitte D1 pour D2")
			case D2_Vocal :
				//return console.log("Quitte D2 pour D1")
		}
	} else if (oldUserChannel !== null && newUserChannel === null) {
		console.log("3")
		switch (oldUserChannel) {
			case D1_Vocal :
				//return console.log("Quitte le channel D1")
			case D2_Vocal :
				//return console.log("Quitte le channel D2")
		}
	}
})

bot.on('message', function(message) {
	Gamepedia.parse(message) || 
	Ping.parse(message)

	//if (Gamepedia.parse(message)){
	//} else {
	//	switch(message.content) {
	//		case '!ping' :
	//			message.channel.send('Pong!'); break
	//		case '!help' :
	//			message.channel.send('ok Help'); break
	//		case '!ts' :
	//			message.channel.send('```Adresse du TeamSpeak : \nts.zencraft.fr```'); break
	//		case '!site' :
	//			message.channel.send(InviteDiscord); break
	//		case '/join' :
	//			if (message.member.voicechannel){
	//				message.member.join()
	//					.then(connecion => {
	//						message.reply('Ok Join');
	//					})
	//			}
	//	}	
	//}
})

bot.login('NjMzMjYyNjkxMzY4MTczNTc4.XaW4QA.lJ_W-W8E3VbgJ-jVBrvI4tdrt70')
//bot.login(process.env.TOKEN)