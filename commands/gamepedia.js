const Command = require('./command')

module.exports = class Gamepedia extends Command {
	static match (message) {
		return message.content.startsWith('!wiki')
	}

	static action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.reply('https://minecraft-fr.gamepedia.com/' + args.join('%20'))
		//message.reply('https://www.google.fr/#q=' + args.join('%20'))
	}
}