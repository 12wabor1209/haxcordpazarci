const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Yurtta sulh, cihanda sulh.**',
'**Hayatta en hakiki mürşit ilimdir.**',
'**Egemenlik verilmez, alınır.**',
'**Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.**',
'**Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez**',
'**Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.**',
'**Egemenlik, kayıtsız şartsız milletindir.**',
'**İstanbul’da çıkan bir gazeteyi Kaşgar’da ki Türk de anlayacaktır.**',
'**Etimin ve kemiğimin babası Ali Rıza Efendi ise, fikrimin babası Ziya Gökalp’tir.**',
'**Türkiye Türklerindir.**',
'**Ne mutlu TÜRK’üm diyene!**',
'**Bir gün, ressamlar Türk’ün simasını kaybederlerse, yıldırımı alsınlar, yapıversinler.**',
'**Hayattaki yegane üstünlüğüm, Türk doğmaktır! Muhterem milletime şunu tavsiye ederim ki; sinesinde yetiştirerek başının üstüne kadar çıkaracağı adamların kanındaki, vicdanındaki cevher-i asli’yi çok iyi tahlil etmek dikkatinden bir an feragat etmesin.**',
'**Milli benliğini bulamayan milletler başka milletlerin avı olacaklardır.**',
'**Türklerin yaşadıkları her yer misak-ı milli hudutları içindedir.**',
'**Türk budur: Yıldırımdır, kasırgadır, dünyayı aydınlatan güneştir.**',
'**Ülkeniz sizindir, Türklerindir. Bu ülke, tarihte Türk’tü bugün de Türk’tür ve sonsuza dek Türk olarak yaşayacaktır.**',
'**Yüksek Türk! Senin için yüksekliğin hududu yoktur. İşte parola budur.**',
'**Türk çocuğu ecdadını tanıdıkça daha büyük işler yapmak için kendinde kuvvet bulacaktır.**',
'**Taş kırılır, Tunç erir, ama Türklük ebedidir.**',
'**Türk Milletinin karakteri yüksektir, Türk Milleti çalışkandır, Türk Milleti zekidir.**',
'**Bir Türk, cihana bedeldir!**',
'**Muhtaç olduğun kudret damarlarındaki asil kanda mevcuttur!**',
'**Ey Türk Gençliği! Birinci vazifen Türk istiklal ve cumhuriyetini ilelebet muhafaza ve müdafaa etmektir.**',
'**Vatana ihanetin nedeni olmaz, Er ya da geç bedeli olur!**',
'**Benim naciz vücudum elbet birgün toprak olacaktır, Fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır.**'
];
var sözver = Math.floor(Math.random()*Random.length);
const söz = new Discord.RichEmbed()
.setDescription(`${Random[sözver]}`)
.setColor(0xe2ff00)
message.channel.send(söz)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['Atasözü, atasözü, Atasozu, atasozu'],
permLevel: 0
};

exports.help = {
name: 'atasözü',
description: 'atasözü',
usage: 'atasözü'
};