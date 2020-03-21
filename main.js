const Discord = require("discord.js");
const client = new Discord.Client();
const credentials = require("./auth.json");
const config = require("./config.json");

const prefix = config.prefix;
// const pinChannelName = config.pinChannelName;
// const pinEmojiIdentifier = config.pinEmojiIdentifier;
// const pinLimit = config.pinLimit;

commands = [
	{
		name: "help",
		action: helpCmdHandler
	},
	{
		name: "ask",
		action: (msg, args) => {
			createChannel(msg.guild)
				.then(console.log)
				.catch(failureCallBack);
		}
	}
];

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user
		.setPresence({
			activity: { name: `Type ${prefix}help` }
		})
		.then(console.log);
});

client.on("message", msg => {
	var channel = msg.channel;
	var content = msg.content;

	// TODO Add support for multi-char prefixes
	if (content.substring(0, 1) !== prefix) {
		return;
	}

	var args = content.substring(1).split(" ");
	const cmdName = args[0].toLowerCase();

	commands.find(cmd => cmd.name === cmdName).action.call(null, msg, args);
});

function helpCmdHandler(msg, args) {
	sendMessage(
		msg.channel,
		`Hello, I'm Ember by Schulich Ignite!\n` +
			`To get started, type \`${config.prefix}help\` to see all available operations\n` +
			`I'm still in beta right now, so please report any bugs you find to @RLee#4054. Enjoy!`
	);
}

function createChannel(guild) {
	const channelManager = guild.channels;
	console.log(channelManager);
}

function sendMessage(channel, messageContent) {
	channel.send(messageContent).catch(failureCallBack);
}

function failureCallBack(error) {
	console.log("The following error was caught: " + error);
	console.log("Error.toString: " + error.toString());
	console.log("Error name: " + error.name);
	console.log("Error message: " + error.message);
	console.log("Error stack: " + error.stack);
	console.log("Discord Error code: " + error.code);
	console.log("Discord Error method: " + error.method);
	console.log("Discord Error path: " + error.path);
}

client.login(credentials.token);
