exports.run = (client, message, params) => {
  message.channel.send('Pinging...')
    .then(message => {
      message.edit(`Pong! \`${message.createdTimestamp}ms\``);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "ping",
  description: "...Pong!",
  usage: "cz!ping"
};

exports.util = {
  name: "ping",
  description: "...Pong!"
};
