const Decimal = require("../break_eternity.js")

module.exports = {
	name: 'eval',
	description: 'Idk',
	execute(message, args) {
    if(["493316614872236046","350057688182292482","607942184167145506","428921414914146304"].includes(message.author.id))
    message.channel.send(eval(args.join(" ")))
	},
};
