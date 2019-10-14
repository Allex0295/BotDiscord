module.exports = class Gamepedia {
	static match (message) {
		return message.content.startswitch('!gamepedia')
	}

	static action (message) {
		args = message.content.split(' ')
		args.shift()
		message.reply('https://minecraft-fr.gamepedia.com/' + args.join('%20'))
	}
}