const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const superagent = require("superagent");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^').then(msg => msg.delete(5000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam aşko') {
    msg.reply('Hoşgeldin aşko :heart: ').then(msg => msg.delete(15000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ip') {
    msg.reply('Sunucu IP : 185.193.164.214 / jb.medusacsgo.com').then(msg => msg.delete(60000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!ip') {
    msg.reply('Sunucu IP : 185.193.164.214 / jb.medusacsgo.com').then(msg => msg.delete(60000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!site') {
    msg.reply('İnternet Sitemiz : https://medusacsgo.com').then(msg => msg.delete(60000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'site') {
    msg.reply('İnternet Sitemiz : https://medusacsgo.com').then(msg => msg.delete(60000));
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'grup') {
    msg.reply('Steam Grubumuz : https://steamcommunity.com/groups/medusacsgofunserver').then(msg => msg.delete(60000));
  }
});

/// KÜFÜR/LİNK ENGEL ///
client.on(`message`, async message => {
	if(message.author.bot) return;
	if(message.channel.id === "734753063331430471") return;
	if(message.channel.id === "718806263668015109") return;
	
	if(message.content === "jb.medusacsgo.com") {
return;
}

if(message.content === "pro.medusacsgo.com") {
return;
}

if(message.content === "https://medusacsgo.com/") {
return;
}

if(message.content === "https://medusacsgo.com/minecraft/") {
return;
}

if(message.content === "medusa.mcoyna.com") {
return;
}

    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, `.com`, `. com`, `.net`, `. net`, `https://`, `http://`, `www.`, `www .`, `sik`, `vajina`, `göt`, `sex`, `seks`, `porno`, `porn`, `amk`, `oc`, `oç`, `orospu`, `oruspu`, `ananı`, `sikiyim`, `sikerim`, `pornhub`, `brazzers`, `kalite 18`,]                                                                        
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            await message.channel.send(`Bu Kanalda küfür/link engelleme var !`).then(msg => msg.delete(15000));
        }
    } catch (e) {
        console.log(e);
    }
});
/// KÜFÜR/LİNK ENGEL ///

/// LİNK ODASI ///
 
/// LİNK ODASI ///

/// DESTEK BOT.JS ///

client.on('message', message => {
        const reason = message.content.split(" ").slice(1).join(" ");
  if (message.channel.name== '「🆘」destek') { 
  if (!message.guild.roles.exists("name", "Medusa | Destek Ekibi")) return message.author.send(` ${message.guild.name} Adlı Sunucunda, \`Medusa | Destek Ekibi\` Adlı Bir Rol Olmadığı İçin, Hiçkimse Destek Talebi Açamıyor.`);
message.delete(1)
    if (message.guild.channels.exists("name", `destek-${message.author.id}`)) return message.author.send(`Açık Bir Destek Talebin Var.`);
message.delete(1)
    message.guild.createChannel(`destek-${message.author.id}`, "text").then(c => {
message.delete(1)
          const category = message.guild.channels.find('name', '📞 Destek Odaları')
message.delete(1)    
          c.setParent(category.id)
      let role = message.guild.roles.find("name", "Medusa | Destek Ekibi");
      let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });

      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
     .setColor('#f19a0f')
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${message.author.username}!`, `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${message.content}`, true)
      .addField(`» Kullanıcı:`, `<@${message.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    
    }
   if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
    if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Yardım talebinizi yardım talebi kanalınızın dışındaki kanallarda kapatamazsınız.`);
     
    message.channel.send(`Destek talebinizi kapatmak istediğinize emin misiniz? \nOnaylamak için \`evet\` yazmalısın. _10 saniye_ içinde yazmazsan kapatma isteği iptal edilecektir.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Kapatma talebinin zamanı geçti yardım talebin kapatılmadı.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

  
});
/// DESTEK /// 

/// OTOROL ///
client.on("guildMemberAdd", (member) => {
    member.addRole('718806261566537812')
});
/// OTOROL ///

/// OTOMESAJ ///
client.on("guildMemberAdd", (member) => {
    member.send('Medusa Fun Suncusu discord grubuna hoş geldin. İyi oyunlar dileriz.\nDiscord Sunucumuz : https://discord.gg/Je6s79p \nSteam Grubu : https://steamcommunity.com/groups/medusacsgofunserver \nCS:GO Sunucu IP : 185.255.95.164 - jb.medusacsgo.com')
});
/// OTOMESAJ ///

/// HG MESAJI ///
client.on('guildMemberAdd', async member => {
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = 'Tehlikeli bilader, a desen seni bıçaklar'
} else {
takizaman = `Güvenli, gizli sırrımızı öğrenebilir`}require("moment-duration-format");
  let message = member.guild.channels.find(x => x.id === `726154157672759446`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.RichEmbed()
    .setDescription(`Sunucuya yeni katılan \`${member.user.tag}\` kullanıcısına Medusa | Üye rolü verildi'

Otorol Sistemi
`)
.setColor('PURPLE')
message.send(taki)
  
});

/// HG MESAJI ///

/// BB MESAJI ///
client.on('guildMemberAdd', async member => {
   const taki = new Discord.RichEmbed()
    .setDescription(`\`${member.user.tag}\`Sunucudan Ayrıldı.'

Otorol Sistemi
`)
.setColor('PURPLE')
message.send(taki)
  
});

/// BB MESAJI ///


/////////////////////////////////////////
client.login(ayarlar.token);