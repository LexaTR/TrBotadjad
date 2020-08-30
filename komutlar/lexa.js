const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

module.exports.run = async (client, message, params) => {
if (message.channel.id !== '718806263839981657') return message.channel.send(`:no_entry: Bu komut burda engellenmiştir. <#718806263839981657> kanalında kullanın`)
  const embedyardim = new Discord.RichEmbed()
    .setTitle("LEXA")
    .setDescription("")
    .setColor('RANDOM')
    .setDescription(
      "Lexa Discord : Lexa#0100\nLexa Steam : https://steamcommunity.com/id/komtrikrulexa/"                                                                                                
    )
    .setFooter("LEXA");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "lexa",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
