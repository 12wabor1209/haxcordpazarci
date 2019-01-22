const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
        .setDescription('')
        .setColor(0x00ffff)
        .addField("**》 > Yapımcım > 《**", `<Qésio>`)
        .addField("**》 > Sponsor/Destek > 《**", `<Bünyamin Öztürk>`)
        .addField("**》 > Grafik/Destek  >:art:《**", `<memoryhackers>`)
        .setURL('https://www.instagram.com/eyup_srm')
        .setTitle("İnstagram Ulaşmak İçin!")


    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yapımcım'],
    permLevel: 0
};

exports.help = {
    name: 'yapımcım',
    description: 'Botun Yapımcısını Gösterir',
    usage: 'yapımcım'
};