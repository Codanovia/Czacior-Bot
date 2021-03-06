const config = require('../config.json');
module.exports = message => {
  const client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const command = message.content.split(' ')[0].slice(config.prefix.length);
  const params = message.content.split(' ').slice(1);
  const perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return message.channel.send('<:blobtickdeny:474749732317822986> Nie masz uprawnień do używania tej komendy!');
    if (cmd.conf.enabled === false) return;
    cmd.run(client, message, params, perms);
  }

  if (message.channel.id == config.channelId) {
    message.react("<:blobtickaccept:474749869727416333>");
    message.react("<:blobtickdeny:474749732317822986>");
    console.log("Zauważono nową sugestie!");
  }
};
