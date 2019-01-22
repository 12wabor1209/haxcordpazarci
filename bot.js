const http = require('http');
const express = require('express');
const db = require('quick.db');





const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
var Jimp = require('jimp');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;


const log = message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
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



client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find('name', 'log');//log ismini ayarlıyacaksınız log adında kanal açın
  if (!channel) return;
        let username = member.user.username;
        if (channel === undefined || channel === null) return;
        if (channel.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    channel.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })



client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); 
  member.addRole(joinRole); 

  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});














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


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber bot') {
    msg.channel.sendMessage('Teşekkür ederim, siz nasılsınız?');
  }
  if (msg.content.toLowerCase() === 'iyiyim bot') {
    msg.channel.sendMessage('Allah iyilik versin.');
  }
  if (msg.content.toLowerCase() === 'sanada bot') {
    msg.channel.sendMessage('Teşekkür ederim.');
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm bot') {
    msg.channel.sendMessage('Aleyküm selam');
  }
  if (msg.content.toLowerCase() === 'napıyorsun bot') {
    msg.channel.sendMessage('İnternet üzerinden her kodu araştırıp kendime entegre edyorum. Böylelikle kendimi geliştiriyorum.');
  }
  if (msg.content.toLowerCase() === 'nasılsın bot') {
    msg.channel.sendMessage('Çok iyiyim, Her saniye daha iyi oluyorum.');
  }
  if (msg.content.toLowerCase() === 'gelişiyormusun bot') {
    msg.channel.sendMessage('Her zaman, Bu kadar hızlı gelişmem sizi korkutuyor mu?');
  }
    if (msg.content.toLowerCase() === 'sa bot') {
    msg.channel.sendMessage('Aleyküm selam');
  }
  if (msg.content.toLowerCase() === 'selam bot') {
    msg.channel.sendMessage('Selam');
  }
  if (msg.content.toLowerCase() === 'haxcord') {
      msg.channel.sendMessage('HaxCord, Haksızlıktan doğan bir oyun platformudur. 30-04-2018 tarihinden 00:17:52 saatinden beri aktif. İlgili yönetim ekibi ve aile ortamı vardır. v4 lig maçlarını Twitch üzerinden canlı yayınlayıp anlık üyelerine aktarır. Çeşitli turnuvalar düzenleyip eğlenceli bir ortam yaratılır.');
  }
  if (msg.content.toLowerCase() === 'eyüp') {
    msg.channel.sendMessage('oğlum ağlama lan değmez eyüp şş');
  }
  if (msg.content.toLowerCase() === 'cem') {
    msg.channel.sendMessage('ah kardişiimm');
  }
  if (msg.content.toLowerCase() === 'sensei') {
    msg.channel.sendMessage(' :eggplant: ');
  }
  if (msg.content.toLowerCase() === 'itsoktocry') {
    msg.channel.sendMessage('ah kardişiimm');
  }
  if (msg.content.toLowerCase() === 'leza') {
    msg.channel.sendMessage('NOĞLUYO ORDAAA');
  }
  if (msg.content.toLowerCase() === 'doktor') {
    msg.channel.sendMessage('https://media.discordapp.net/attachments/511252289902608387/528172757012316180/doktorr.jpg');
  }
  if (msg.content.toLowerCase() === 'cem ys') {
    msg.channel.sendMessage('cem ys açmıcan he');
  }  
  if (msg.content === 'Larà') {
    msg.channel.sendMessage('https://media.discordapp.net/attachments/511252289902608387/527799326341070859/giphy.gif');
  }
  if (msg.content.toLowerCase() === 'ys') {
    msg.channel.sendMessage('ya link ya linç koçum');
  }
  if (msg.content.toLowerCase() === 'qésio') {
    msg.channel.sendMessage('oğlum ağlama lan değmez eyüp şş');
  }
  if (msg.content.toLowerCase() === 'coşş') {
    msg.channel.sendMessage('KOKOREÇKOKOREÇKOKOREÇKOKOREÇKOKOREÇKOKOREÇYİYENMİNECRAFTOYNUYORDURKOKOREÇKOKOREÇKOKOREÇKOKOREÇKOKOREÇKOKOREÇ');
  }
  if (msg.content.toLowerCase() === 'coşkun') {
    msg.channel.sendMessage('Coşkun kanka bizi bi kokoreççiye götür be');
  }
  if (msg.content.toLowerCase() === 'enes') {
    msg.channel.sendMessage('NOĞLUYO ORDAAA');
  }
  if (msg.content.toLowerCase() === 'kübra') {
    msg.channel.sendMessage('Did you mean? Kraliçe');
  }
  if (msg.content.toLowerCase() === 'harris') {
    msg.channel.sendMessage('Did you mean? Kraliçe');
  }
  if (msg.content.toLowerCase() === 'site') {
    msg.channel.sendMessage('http://www.haxcord.com');
  }
  if (msg.content.toLowerCase() === 'fok balığı') {
    msg.channel.sendMessage('https://cdn.discordapp.com/attachments/467995881258483732/518591592333049870/DSC_0155.jpg');
  }
  if (msg.content.toLowerCase() === 'kamikaze') {
    msg.channel.sendMessage('ataktif');
  }
  if (msg.content.toLowerCase() === '2. sezon şampiyonu') {
    msg.channel.sendMessage('bi dakika entera basıyorum.. heh Comrades Of Heaven');
  }
  if (msg.content.toLowerCase() === '1. sezon şampiyonu') {
    msg.channel.sendMessage('Massive Stroke :star2: ');
  }
  if (msg.content.toLowerCase() === '3. sezon şampiyonu') {
    msg.channel.sendMessage('Massive Stroke :star2: ');
  }
  if (msg.content.toLowerCase() === '4. sezon şampiyonu') {
    msg.channel.sendMessage('Velez Sarsfield');
  }
  if (msg.content.toLowerCase() === '5. sezon şampiyonu') {
    msg.channel.sendMessage('öyle bişy yok ya');
  }
  if (msg.content.toLowerCase() === '6. sezon şampiyonu') {
    msg.channel.sendMessage('Lig devam ediyor..');
  }
  if (msg.content.toLowerCase() === '1v1 şampiyonu') {
    msg.channel.sendMessage('Bucklez');
  }
  if (msg.content.toLowerCase() === 'qwerty123321utycxz') {
    msg.channel.sendMessage('**HaxCord Jeton Market**\n\n__KRAMPONLAR__\n <:basitkrampon:535970176051576832> Basit Krampon - 300 Jeton\n <:ortakrampon:535970215994064935> Orta Krampon - 500 Jeton\n <:elitkrampon:535970256447864839> Elit Krampon - 750 Jeton\n <:profesyonelkrampon:535970286898774016> Profesyonel Krampon - 1000 Jeton\n <:hckrampon:536137883338276864> HC Kramponu - 2500 Jeton ( Kalan: 3 )\n\n__ROLLER__ ( Alınan roller geri iade edilirse jeton iadesi gerçekleşmez. )\n :money_mouth: Jeton Babası - 100 Jeton\n :moneybag: Milyarder - 250 Jeton\n <:besiktas:504264577521942538> Beşiktaşlı - 600 Jeton\n <:galatasaray:504604172012879893> Galatasaraylı - 600 Jeton\n <:fb:520202495025348610> Fenerbahçeli - 600 Jeton\n <:trabzonspor:535816255098060810> Trabzonsporlu - 500 Jeton\n <:bursaspor:535816182494920741> Bursasporlu - 500 Jeton\n\n( Roller 1 defa alınabilir )\n\n__BOT KOMUTLAR__\n :military_medal: Kişiye özel kart - 1000 Jeton ( 1 defa alınabilir )\n :page_with_curl: Bota ismini söyleyince cevap vermesi - 1000 Jeton\n :camera: Bota ismini söyleyince fotoğraf cevabı vermesi - 1500 Jeton\n\n__TAKIMCA JETON BİRLEŞTİRİP ALINABİLİR ÖĞELER__\n :stadium: Takıma özel antrenman sahası veya maç sahası ( lig/kupa maçlarında kullanılamaz ) - 3000 Jeton\n :credit_card: Wildcard - Fiyatı belirlenmedi.\n\nSatın Alımlar için Süper Modlara veya Moderatörlere ulaşın.\n@everyone');
  }
  if (msg.content.toLowerCase() === 'sa') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'Sa') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'Selamun aleyküm') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'Selam') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'selam') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'merhaba') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
  if (msg.content.toLowerCase() === 'Merhaba') {
      msg.react("🇦")
    
      msg.react("🇸")
	}
});

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


client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});






client.on('message', async message =>{
  
let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 
  
  
      let jetonum = '200';
let jeton = await db.fetch(`jetonum_${message.author.id}`);
if (jeton === null) jetonum = '200';
else jetonum = jeton;

  if(cmd === 'jetonum-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: jetonum-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**Jetonum Miktarı Belirlemen Lazım. Kullanımı: jetonum-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**Jetonum Miktar Sayı Olması Lazım. Kullanımı: jetonum-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim jetonu yolladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    
    db.set(`jetonum_${defineduser}`,`${miktar}`)
    
    message.channel.send(`JETON MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
if(cmd === 'jetonum'){
    
 message.reply( + jetonum + ` Jetonun var.`)}
  
let envanterim = 'Envanterin boş';
let envanter = await db.fetch(`envanterim_${message.author.id}`);
if (envanter === null) jetonum = 'Envanterin boş';
else envanterim = envanter;

  if(cmd === 'envanter-ayarla'){

    let esya = args[0];

     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: envanter-ayarla <esya> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }

     if (!args[0]) {
            message.channel.send(`**Envanterin Eşyasını Belirlemen Lazım. Kullanımı: envanter-ayarla <esya> <kullanıcı>**`);
           return;
  }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim eşyayı yolladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    



    db.set(`envanterim_${defineduser}`,`${esya}`)

    message.channel.send(`Envanter: ${esya} Olarak Ayarlandı`)







     };
if(cmd === 'envanterim'){

 message.reply(`Envanterin: `+ envanterim)}
  
  
  
      let trc = '0';
let fetched = await db.fetch(`trc_${message.author.id}`);
if (fetched === null) trc = '0';
else trc = fetched;
  
  
   let pos = '0';
let fetched1 = await db.fetch(`pos_${message.author.id}`);
if (fetched1 === null) pos = '0';
else pos = fetched1;
  
   let def = '0';
let fetched2 = await db.fetch(`def_${message.author.id}`);
if (fetched2 === null) def = '0';
else def = fetched2;
  
   let pas = '0';
let fetched3 = await db.fetch(`pas_${message.author.id}`);
if (fetched3 === null) pas = '0';
else pas = fetched3;
  
     let dri = '0';
let fetched4 = await db.fetch(`dri_${message.author.id}`);
if (fetched4 === null) dri = '0';
else dri = fetched4;
  
  let şut = '0';
let fetched5 = await db.fetch(`şut_${message.author.id}`);
if (fetched5 === null) şut = '0';
else şut = fetched5;
  
   let yet = '0';
let fetched6 = await db.fetch(`yet_${message.author.id}`);
if (fetched6 === null) yet = '0';
else yet = fetched6;
  
  
  
  
  
  
  
  if(cmd === 'trc-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: trc-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**TRC Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**TRC Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`trc_${defineduser}`,`${miktar}`)
    
    message.channel.send(`TRC MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  
  
  if(cmd === 'trc-miktarım'){
   db.fetch(`trc_${message.author.id}`).then( y => {
   
    if(y == null) y = 'Ayarlanmadı';
   
    message.channel.send(`TRC MİKTARINIZ : ${y} Olarak Ayarlandı`)
   
   })
    
    
  
    
  
  };
  
  



  
  if(cmd === 'kart'){
     
    
    
 message.channel.send(`:timer: | Kartınız gönderiliyor, lütfen bekleyin.`).then(m => m.delete(1000));
 

  const embed = new Discord.RichEmbed()
 .setThumbnail("https://cdn.discordapp.com/attachments/518801800254586891/523808167919091712/png_4.png")
  
  
  let username = message.author.username;
    
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/518801800254586891/523808167919091712/png_4.png");
           
  const userimg = await Jimp.read(message.author.avatarURL);
            var font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            if (username < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (username > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
       await bg.print(font, 75, 110,yet);
       await bg.print(font, 75, 435, trc +" TRC");
       await bg.print(font, 75, 470, dri +" DRI");
       await bg.print(font, 75, 505, şut +" SUT");
       await bg.print(font, 250, 435, pos +" POS");
       await bg.print(font, 250, 470, pas +" PAS");
       await bg.print(font, 250, 505, def +" DEF");
            await bg.print(font, 30, 350, username);
            await userimg.resize(190, 190);
  
            await bg.composite(userimg, 175, 126).write("./img/"+ message.id + ".png");
  
    
    
              setTimeout(function () {
                    message.channel.send(new Discord.Attachment("./img/" + message.id + ".png"));
              }, 1000);
  
              setTimeout(function () {
                fs.unlink("./img/" + message.id + ".png");
              }, 10000);
     
     

   
   
    
    
    
    
    

      

     
     

    
    
    
    
  }
  
  
  if(cmd === 'yetenek-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: yetenek-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**YETENEK Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**YETENEK Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`yet_${defineduser}`,`${miktar}`)
    
    message.channel.send(`YETENEK MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  
  
  
  if(cmd === 'pos-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: pos-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**POS Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**POS Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`pos_${defineduser}`,`${miktar}`)
    
    message.channel.send(`POS MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  
  
  if(cmd === 'pas-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: pas-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**PAS Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**PAS Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`pas_${defineduser}`,`${miktar}`)
    
    message.channel.send(`PAS MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  
  
  
  if(cmd === 'def-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: def-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**DEF Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**DEF Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`def_${defineduser}`,`${miktar}`)
    
    message.channel.send(`DEF MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  
  
   if(cmd === 'dri-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: dri-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**DRİ Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**DRİ Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
     if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`dri_${defineduser}`,`${miktar}`)
    
    message.channel.send(`DRİ MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  

 if(cmd === 'şut-ayarla'){
    
    let miktar = args[0];
    
     let defineduser = '';
     if (!args[1]) { 
          message.channel.send('Kullanımı: şut-ayarla <miktar> <kullanıcı>')
      } else {
        let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned.id;
       }
    
     if (!args[0]) {
            message.channel.send(`**ŞUT Miktarı Belirlemen Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
           return;
  }
  
     if (isNaN(args[0])) {
          message.channel.send(`**ŞUT Miktar Sayı Olması Lazım. Kullanımı: trc-ayarla <miktar> <kullanıcı>**`);
          return; 
      }
   if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("Kardeşim yeteneği ayarladın şuan bak yoldadır muhtemelen gelmek üzeredir herhalde:dd")
    
    
    db.set(`şut_${defineduser}`,`${miktar}`)
    
    message.channel.send(`ŞUT MİKTARINIZ : ${miktar} Olarak Ayarlandı`)

    
    
    
    

     
     };
  

  
  

  




});

client.on("guildMemberAdd", member => {
    
    var channel = member.guild.channels.find("name", "hoşgeldiniz");
    if (!channel) return;
    
    var role = member.guild.roles.find("name", "Takımsız");
    if (!role) return;
    
    member.addRole(role); 
    
    channel.send(member + " artık " + role + ", Yerinizde olsam bu oyuncuyu kaçırmazdım..");
    
    member.send("Aramıza hoş geldin! Artık @Takımsız rolüne sahipsin,\n Kuralları okumayı unutma. Burada eğlencenin dibine vuruyoruz!")
    
});
















































client.login(ayarlar.token);