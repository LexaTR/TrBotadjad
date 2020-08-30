const Discord = require("discord.js");
const ms = require("ms");
var mutelu = "718806261587640346"; //buraya muteli rolünün id'sini koyunuz
var uye = "718806261566537812"; //buraya muteli rolünün id'sini koyunuz
var uye2 = "718806261566537816";
var uye3 = "718806261587640344";
var uye4 = "718806261587640343";
var uye5 = "718806261600092221";
var uye6 = "718806261600092222";
var uye7 = "718806261600092223";
var uye8 = "718806261600092224";
var uye9 = "718806261600092225";
var uye10 = "718806261612806184";
var uye11 = "718806261612806185";
var uye12 = "728590415858630728";
var uye13 = "718806261612806186";
var uye14 = "718806261612806187";
var muteyetkisi = "718806261612806192"; // buraya mute yetkis irolünün id yazınız.
exports.run = async (client, message, args) => {
  if (!message.member.roles.has(muteyetkisi)) {
  } else {
    var role = message.guild.roles.find(role => role.name === "Medusa | Üye")
    let muted =
      message.mentions.members.first() ||
      message.guild.members.find(c => c.id === args[0]);
    let user = message.member
    let guild = message.guild
    if (!muted) {
      message.reply("lütfen susturulacak üyeyi etiketleyiniz.");
    } else {
      if (
        muted.highestRole.calculatedPosition >=
        message.member.highestRole.calculatedPosition
      ) {
        message.reply("bu kullanıcı senden daha üst pozisyonda.");
      } else {
        let mutezaman = args[1]
          .replace("gün", "d")
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
        if (!mutezaman) {
          message.reply("bir zaman girmediniz!");
        } else {
          let sebep = args.splice(2, args.length).join(" ");
          //!!sustur @etiket 0 zaman 1 sebep 2
          let log = message.guild.channels.find(c =>
            c.name.toLowerCase().includes("mute-log")
          );
          let vakit = mutezaman
            .replace("d", " gün")
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
          try {
            log.send(
              new Discord.RichEmbed()
                .setTitle("Bir kullanıcı susturuldu!")
                .setFooter(`ID: ${muted.id}`, muted.user.displayAvatarURL)
                .setColor("RED")
                .setThumbnail(message.author.displayAvatarURL)
                .addField(`İşlem sahibi`, `<@${message.author.id}>`)
                .addField(`Susturulan`, `<@${muted.id}>`)
                .addField(
                  `Sebebi`,
                  `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`
                )
                .addField(`Süre`, `${vakit}`)
            );
            muted.removeRole(uye);
            muted.removeRole(uye2);
            muted.removeRole(uye3);
            muted.removeRole(uye4);
            muted.removeRole(uye5);
            muted.removeRole(uye6);
            muted.removeRole(uye7);
            muted.removeRole(uye8);
            muted.removeRole(uye9);
            muted.removeRole(uye10);
            muted.removeRole(uye11);
            muted.removeRole(uye12);
            muted.removeRole(uye13);
            muted.removeRole(uye14);
            muted.addRole(mutelu);
            message.channel.send(
              `**${muted.user.tag}** kullanıcısı, **${message.author.tag}** tarafından **${vakit}** süreyle susturuldu!`
            );
          } catch (e) {
            console.log(e);
          }

          setTimeout(async function() {
            muted.removeRole(
              mutelu,
              "Susturulma cezası, sürenin bitmesi sebebiyle kaldırıldı."
            );
            muted.addRole(
              uye,
              "Eski Rollerini almak için kurucular ile konuş."
            );
          }, ms(mutezaman));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0
};

exports.help = {
  name: "sustur",
  description: "",
  usage: ""
};