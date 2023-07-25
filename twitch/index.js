import 'dotenv/config'
import tmi from 'tmi.js'

console.log('are you here?')
export let tmiClient = new tmi.client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_PASSWORD
    },
    channels: [process.env.TWITCH_CHANNEL]
},
console.log('are you here?????'));