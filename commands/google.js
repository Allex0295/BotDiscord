module.exports = class Google {
	static match (message) {
		return message.content.startswitch('!google')
	}

	static action (message) {
		args = message.content.split(' ')
		args.shift()
		message.reply('https://www.google.fr/#q=' + args.join('%20'))
	}
}