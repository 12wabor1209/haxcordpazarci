const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

  var Games = [

        "Diğer botların geleceğiyle",
    
        "Kızların duygularıyla",

        "ÇİLESİZ BİR GÜNÜM OLMADI GİTTİ",
		
		"BÖYLE YAŞAMAKTAN BIKTIM BEN USTA",
		
		"HaxCord, HaxBall'ın kalbi", 
		
		"Bazenleri Haxball", 
		
		"Bazı botların hayalleriyle",
      
      "Mutlu gibi gözükmek için",
      
      "Starwars'da robot olarak", 
      
      "Mahallede botlarla uzun bot",
      
      "Kendi kodlarıyla",
    
      "İnsanların hayatlarıyla",
      
      "Coşkunun kokoreciyle",
      
      "kissinghigh dinleyerek",
      
      "Enes Burnuyla"
    ];

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` HaxCord Haxballcısına hizmet vermekteyiz!`);

  setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random]);
        client.user.setStatus("dnd")
        }, 2 * 5000);
};