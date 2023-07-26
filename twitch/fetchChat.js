import dotenv from 'dotenv'
import tmi from 'tmi.js'

dotenv.config()
console.log(process.env.TWITCH_USERNAME)

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.TWITCH_OAUTH,
	},
	channels: ['eddyybliss'] // change to config file later
});

client.connect();

client.on('message', (channel, tags, message, self, err) => {

    // Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username} heya!`);
	}

	if(message.toLowerCase() === 'r') {
		//change some state to be read in playerControls
	}
});