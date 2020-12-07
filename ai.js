var data = require('./aidata.json')
const tf = require('@tensorflow/tfjs')
const natural = require('natural');
const fs = require("fs")
const path = require("path")
function save() {fs.writeFileSync(path.resolve(__dirname, './aidata.json'), JSON.stringify(data, null, "\t"))}
module.exports = {
	name: 'ai',
	description: 'Idk',
	execute(message, args) {
    const tokenizer = new natural.WordTokenizer();
    const toppatGov = new natural.BayesClassifier();// supply a training set of data for two membership: night and day
    for(let i in data) {
      toppatGov.addDocument(i, data[i])
    }
    toppatGov.train()
    if(args[0] == "classify") message.channel.send(toppatGov.classify(args.slice(1).join(" ")))
    if(args[0] == "train") data[args.slice(2)] = args[1]
    save()
	},
};
