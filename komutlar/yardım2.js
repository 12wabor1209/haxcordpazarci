const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("L-Güvenlik :video_game:Oyuncu Komutları!**")
        .setDescription('')
        .setColor("RANDOM")
        .addField("**» :video_game: Oyuncu Komutları**", 'oylama + Oylama sorusu =  Oylama Yapar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'istatistik = Botun İstatistiğini Görebilirsin! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'çekiliş =  Çekiliş Yapmanızı sağlar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'gif + gif konusu =  Rastgele Gif Atarsınız! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'atasözü =  Rastgele Atasözü Atar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'botbilgi =  Bot ile ilgili bilgi verir! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'afk =  Afk Olmanızı sağlar! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'hava =  Bölgenizdeki Havadurumunu gösterir! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'yapımcım =  Botun Yapımcısını gösterir! ')
        .addField("**» :video_game: Oyuncu Komutları**", 'bangif=  Ban gifi yollar! :))')
        .addField("**» :video_game: Oyuncu Komutları**", 'dönenrenkler =  Rasgele Dönenrenkleri atar Gözünüz bozulur.')
        .addField("**» :video_game: Oyuncu Komutları**", 'anket + Anker Sorusu =  Anket Yapmanızı Sağlar!')
        .addField("**» :video_game: Oyuncu Komutları**", 'aşkölçer + Kişi =  Etiketlediğiniz kişiyle aşkınızı ölçer!')
    
    
        .setFooter("**» 👥 HAXCORD BOTU © 2018 - Tüm Hakları Saklıdır. Qésio-SAYGILAR!**",)
       
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
    aliases: ['halp'],
    permLevel: 0
};

exports.help = {
    name: 'komutlar',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};