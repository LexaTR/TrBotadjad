const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (message.channel.id !== '721786199328423998') return message.channel.send(`:no_entry: Bu komut burda engellenmiştir. <#721786199328423998> kanalında kullanın`)
	let csgopng = "https://cdn.discordapp.com/attachments/447829045376319500/516564269584744448/csgo.png"
    var kasadancikanlar = [
		"★ Glock-18 'Fade' (**Factory New**) \nFiyat: **298.88₺**",
    "★ Huntsman Knife 'Ultraviolet' (**Field-Tested**) \nFiyat: **642.47₺**",
		"★ M4A4 'The Emperor' (**Battle-Scarred**) \nFiyat: **102.15₺**",
    "★ AWP 'Neo-Noir' (**Minimal Wear**) \nFiyat: **215.47₺**",
		"★ USP-S 'Cortex' (**Field-Tested**) \nFiyat: **29.64₺**",
    "★ AK-47 'Frontside Misty' (**Field-Tested**) \nFiyat: **96.24₺**",
		"★ Desert Eagle 'Mecha Industries' (**Field-Tested**) \nFiyat: **27.18₺**",
    "★ Desert Eagle 'Light Rail' (**Field-Tested**) \nFiyat: **12.57₺**",
		"★ AWP 'Asiimov' (**Field-Tested**) \nFiyat: **365.75₺**",
    "★ AK-47 'Bloodsport' (**Field-Tested**) \nFiyat: **270.17₺**",
		"★ Gut Knife 'Stained' (**Field-Tested**) \nFiyat: **481.54₺**",
    "★ AWP 'Wildfire' (**Field-Tested**) \nFiyat: **284.83₺**",
		"★ USP-S 'Flashback' (**Factory New**) \nFiyat: **13.98₺**",
    "★ Karambit 'Doppler' (**Factory New**) \nFiyat: **2986.63₺**",
		"★ AWP 'Dragon Lore' (**Minimal Wear**) \nFiyat: **9552.15₺**",
    "★ Skeleton Knife 'Fade' (**Factory New**) \nFiyat: **7470.16₺**",
		"★ Talon Knife 'Fade' (**Factory New**) \nFiyat: **4741.53₺**",
    "★ Falchion Knife 'Doppler' (**Factory New**) \nFiyat: **2875.16₺**",
		"★ StatTrak™ Butterfly Knife 'Tiger Tooth' (**Factory New**) \nFiyat: **4469.24₺**",
    "★ StatTrak™ PP-Bizon 'Harvester' (**Minimal Wear**) \nFiyat: **6.47₺**",
		"★ USP-S Cortex (**Field-Tested**) \nFiyat: **3.64₺**",
    "★ StatTrak™ UMP-45 'Labyrinth' (**Factory New**) \nFiyat: **3.24₺**",
		"★ P2000 'Acid Etched' (**Field-Tested**) \nFiyat: **6.18₺**",
    "★ P90 'Chopper' (**Field-Tested**) \nFiyat: **5.12₺**",
		"★ SSG 08 'Ghost Crusader' (**Well-Worn**) \nFiyat: **365.75₺**",
    "★ M4A1-S 'Nitro' (**Well-Worn**) \nFiyat: **16.17₺**",
		"★ Sport Gloves 'Pandora's Box' (**Field-Tested**) \nFiyat: **8730.24₺**",
    "★ Sport Gloves 'Vice' (**Field-Tested**) \nFiyat: **6820.53₺**",
		"★ Hand Wraps 'Overprint' (**Well-Worn**) \nFiyat: **1406.28₺**",
    "★ Stiletto Knife 'Boreal Forest' (**Battle-Scarred**) \nFiyat: **469.43₺**",
		"★ AWP 'Containment Breach' (**Well-Worn**) \nFiyat: **190.45₺**",
		"★ StatTrak Famas 'Afterimage' (**Field-Tested**) \nFiyat: **70.73₺**",
    "★ 'The Doctor' Romanov | Sabre \nFiyat: **30.52₺**",
		"★ Lt. Commander Ricksaw | NSWC SEAL \nFiyat: **22.72₺**",
    "★ The Elite Mr. Muhlik | Elite Crew \nFiyat: **18.19₺**",
		"★ Seal Team 6 Soldier | NSWC SEAL \nFiyat: **12.02₺**",
    "★ SG 553 'Darkwing' (**Minimal Wear**) \nFiyat: **13.59₺**",
		"★ FAMAS 'Roll Cage' (**Battle-Scarred**) \nFiyat: **25.00₺**",
    "★ USP-S 'Kill Confirmed' (**Well-Worn**) \nFiyat: **311.01₺**",
		"★ MAC-10 'Nuclear Garden' (**Field-Tested**) \nFiyat: **16.59₺**",
    "★ Sport Gloves 'Omega' (**Field-Tested**) \nFiyat: **3.340.17₺**",
		"★ P250 'Muertos' (**Factory New**) \nFiyat: **41.00₺**",
    "★ 'Two Times' McCoy | USAF TACP \nFiyat: **7.02₺**",
		"★ Tec-9 'Re-Entry' (**Factory New**) \nFiyat: **12.00₺**",
    "★ CZ75-Auto 'Crimson Web' (**Minimal Wear**) \nFiyat: **7.50₺**",
		"★ AUG 'Stymphalian' (**Field-Tested**) \nFiyat: **14.00₺**",
    "★ Hand Wraps 'Duct Tape' (**Field-Tested**) \nFiyat: **830.16₺**",
		"★ StatTrak Music Kit | Blitz Kids, The Good Youth \nFiyat: **80.53₺**",
    "★ Music Kit | Lennie Moore, Java Havana Funkaloo \nFiyat: **30.16₺**",
		"★ R8 Revolver 'Llama Cannon' (**Battle-Scarred**) \nFiyat: **20.24₺**",
    "★ AUG 'Momentum' (**Well-Worn**) \nFiyat: **16.47₺**",
		"★ M4A1-S 'Mecha Industries' (**Field-Tested**) \nFiyat: **71.92₺**",
    "★ MP7 'Bloodsport (**Factory New**) \nFiyat: **75.24₺**",
		"★ Sticker | Astralis | Boston 2018 \nFiyat: **35.00₺**",
    "★ SG 553 'Pulse' (**Field-Tested**) \nFiyat: **10.12₺**",
		"★ Driver Gloves 'Lunar Weave' (**Field-Tested**) \nFiyat: **2.000.75₺**",
    "★ Desert Eagle 'Blaze' (**Factory New**) \nFiyat: **2.370.17₺**",
		"★ Special Agent Ava | FBI \nFiyat: **40.55₺**",
    "★ Karambit 'Lore' (**Field-Tested**) \nFiyat: **4.032.53₺**",
		"★ Bowie Knife 'Boreal Forest' (**Field-Tested**) \nFiyat: **727.08₺**",
    "★ M9 Bayonet 'Rust Coat' (**Battle-Scarred**) \nFiyat: **1.311.98₺**",
		"★ M4A4 'Hellfire' (**Field-Tested**) \nFiyat: **110.83₺**",
		"★ P90 'Nostalgia' (**Field-Tested**) \nFiyat: **26.35₺**",
    "★ UMP-45 'Momentum' (**Field-Tested**) \nFiyat: **27.74₺**",
		"★ StatTrak Music Kit | Neck Deep, Life's Not Out To Get You \nFiyat: **95.82₺**",
    "★ Stiletto Knife 'Safari Mesh' (**Field-Tested**) \nFiyat: **654.14₺**",
		"★ Classic Knife 'Slaughter' (**Minimal Wear**) \nFiyat: **2.436.05₺**",
    "★ Sport Gloves 'Arid' (**Field-Tested**) \nFiyat: **2.440.43₺**",
		"★ P250 'Undertow' (**Minimal Wear**) \nFiyat: **92.38₺**",
    "★ Ursus Knife 'Scorched' (**Battle-Scarred**) \nFiyat: **727.07₺**",
		"★ StatTrak Music Kit | KiTheory, MOLOTOV \nFiyat: **38.21₺**",
	]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
	const embed  = new Discord.RichEmbed()
	.setImage("https://cdn.dribbble.com/users/1146759/screenshots/4180229/casecity-case2.gif")
	.setAuthor('Medusa Bot', csgopng)
	.setDescription(`${kasadancikanlar}`)
	.setFooter(`Kasayı açan (${message.author.username}) | Kasa Fiyatı: 35₺ |`)
	.setColor("RANDOM")
	return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csgokasa', 'kasaaç', 'kasaac'],
  permLevel: 0
};

exports.help = {
  name: 'csgo-kasa-açma',
  description: 'CS:GO kasa açma simülasyonu',
  usage: 'csgo-kasa-açma'
};