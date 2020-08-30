const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
if (message.channel.id !== '718806263839981657') return message.channel.send(`:no_entry: Bu komut burda engellenmiştir. <#718806263839981657> kanalında kullanın`)


 let kullanıcı = message.mentions.users.first() || message.author;
 
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(kullanıcı.username + " Adlı Kullanıcının Avatarı.")
        .setImage(kullanıcı.avatarURL)
    message.channel.send(avatar)
    
};

module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['pp', 'profilphoto'],
  permLevel: 0
};

module.exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen kişinin veya komutu yazan kişinin avatarını atar.',
  usage: 'avatar <@kişi-etiket> / +avatar'
};