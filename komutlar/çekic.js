const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
if (message.channel.id !== '721786199328423998') return message.channel.send(`:no_entry: Bu komut burda engellenmiştir. <#721786199328423998> kanalında kullanın`)
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana :hammer: Attı. Canın Acımış Olmalı!**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç'
};