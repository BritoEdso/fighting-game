import { tmiClient } from "./index.js";

tmiClient.connect().catch(console.error);

tmiClient.on('message', (channel, userstate, message, self) => {
    console.log(message, 'ayo')
	if (self) return;

	// Will only reconize command if message starts with the prefix !
	if ((message.indexOf(PREFIX)) !== -1) {
		commands.call(channel, userstate, message);
	}

	// checkForClips(channel, userstate, message)
});