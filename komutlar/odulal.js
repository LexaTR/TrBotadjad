const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();

module.exports.run = async (client, message) => {
if (message.channel.id !== '718806263839981657') return message.channel.send(`:no_entry: Ödülünü sadece. <#718806263839981657> kanalından alabilirsin.`)
   let sunucuowner = message.guild.owner
   message.channel.send('Discord ve CS:GO Sunucusundaki bilgilerin toplanıyor. \nÖdülün 2 gün içinde belirtilip sunucu içerisinde verilecektir. \n\nNot : Bu komutu **1 Ay İçinde** 1 kereden fazla yazanlara ödül verilmez. Verilmiş ise geri alınır')                      
   sunucuowner.send(`${message.author} adlı kişi **Ödülüm** isimli komutu kullandı.`) 
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ödülüm',
  description: 'Aylık Ödül.',
  usage: '!ödülüm'
};