const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'Evet',
'Belki',
'Hayır'
];
var sorusor = Math.floor(Math.random()*Random.length);
const soru = new Discord.RichEmbed()
.setDescription(`${Random[sorusor]}`)
.setColor(0xe2ff00)
message.channel.send(soru)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['bot sence'],
permLevel: 0
};

exports.help = {
name: 'botsence',
description: 'Bota soru sorarsın o da cevaplar',
usage: 'botsence'
};