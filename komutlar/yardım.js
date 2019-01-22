const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("L-Güvenlik :gear:Yetki Komutları**")
        .setDescription('')
        .setColor("RANDOM")
        .addField("**» :gear:Yetki Komutları**", ' temizle = Mesajları Silmenizi Sağlar! ')
        .addField("**» :gear:Yetki Komutları**", ' kick =    Bu Komut sayesinde Kişiyi Atmanızı Sağlar! ')
        .addField("**» :gear:Yetki Komutları**", ' davet =   Botumuzu Sunucunuza Davet Edebilirsiniz! ')
        .addField("**» :gear:Yetki Komutları**", ' duyuru =  İstediğiniz Bir yere duyuru yaparsınız! ')
        .addField("**» :gear:Yetki Komutları**", ' kilit =   İstediğiniz Bir Kanalı Kilitlersiniz! ')
        .addField("**» :gear:Yetki Komutları**", ' restart =  Botu Resetlemenizi Sağlar! ')
        .addField("**» :gear:Yetki Komutları**", ' mute =  İstediğiniz Kişiyi Susturur! ')
        .addField("**» :gear:Yetki Komutları**", ' unmute =  Mute Atarsınız Kaldırmak İçin unmute @user! ')
        .addField("**» :gear:Yetki Komutları**", ' duyuru =  Duyuru yapmanızı sağlar herkese yansır! ')
        .addField("**» :gear:Yetki Komutları**", ' slowmode =  Discord yavaş moda geçer! ')
      
  
    
                 .setFooter("**» 👥Oyuncu Komutlarına ulaşmak için komutlar yazınız**",)
    
    
    
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y'],
    permLevel: 0
};

exports.help = {
    name: 'adminpanel123321',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};