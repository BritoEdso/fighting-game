let call = (channel, userstate, message) => {
//   var channel_url =
//     "https://www.twitch.tv/" + channel.replace(/[^0-9A-Z]+/gi, "");
console.log(message)
  if (message.toLowerCase() === "!hello") {
    tmiClient.say(channel, `@${userstate.username}, heya!`);
  }
};
