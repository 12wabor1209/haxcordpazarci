 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/ssxUuhriUoGQ0/giphy.gif",
                   "https://media.giphy.com/media/etd93UKSpRAIw/giphy.gif",
                   "https://media.giphy.com/media/11KZ5xbbnE0EuY/giphy.gif",
                   "https://thumbs.gfycat.com/FlusteredEmbarrassedHuemul-size_restricted.gif",
                   "https://i.pinimg.com/originals/32/89/08/32890824be8818834aa9122d2611d140.gif",
                   "http://www.nkfu.com/wp-content/uploads/2014/01/ataturk-6.gif",
                   "https://66.media.tumblr.com/99acc6e97dd6d2c488f37be8463a8d2d/tumblr_oqu4djgOHU1qk8rzpo1_400.gif",
                   "https://66.media.tumblr.com/62dd6a2c36d96be42556815929a4acd9/tumblr_ol2e3sMx161sz1s7po1_400.gif",
                   "https://media.tenor.com/images/87c326c3a36e6c5d0b53cd58e8e6fce8/tenor.gif",
                   "https://media1.tenor.com/images/9bc96af34563931baaa6e3f071e4fc31/tenor.gif",
                   "http://i.hizliresim.com/rMkOMP.gif",
                   "https://galeri14.uludagsozluk.com/830/gecenin-gif-i_1760380.gif",
                   "http://img.webme.com/pic/h/hazirgifler/ata11.gif",
                   "https://img-s2.onedio.com/id-55d873ec35af5fa277caaf57/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-83f384d9ef455af45d03b4589a19bbeb200415a4.gif",
                   "https://img-s1.onedio.com/id-55d856198e76998b49e62df0/rev-0/raw/s-08c54c8f4637e2f72c381bd6abfd43aeeea93040.gif",
                   "https://thumbs.gfycat.com/WarmCrispCentipede-small.gif",
                   "https://www.neoldu.com/d/other/ataturk-gif11.gif",
                   "https://i.pinimg.com/originals/a7/30/d4/a730d4f3279767e52bdb3f527230b203.gif",
                   "https://media1.tenor.com/images/9db677c760e93cdab2418a3e04bfe139/tenor.gif",
                   "https://66.media.tumblr.com/df0841292ade369b129a259af93a6a12/tumblr_oyjx7okHZK1st7nhfo1_r3_400.gif",
                   "https://thumbs.gfycat.com/PeskyMajorAustraliansilkyterrier-small.gif",
                   "https://www.neoldu.com/d/other/ataturk-gif7.gif",
                   "https://img-s1.onedio.com/id-571f39756598bfb75c221250/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-a7e6b03d1781112e86b8a555efeb6a6f475c34a1.gif",
                   "https://imgrosetta.mynet.com.tr/file/2005879/728xauto.jpg",
                   "https://iasbh.tmgrup.com.tr/515684/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2017/10/29/iste-ataturkun-pek-bilinmeyen-fotograflari-1509271673344.jpg",
                   "https://iasbh.tmgrup.com.tr/79cbcd/0/0/0/0/0/0?u=http://i.aktuel.com.tr/galeri/yasam/ataturkun-arsivlerden-cikan-son-fotograflari/001.jpg",
                   "http://www.hukukihaber.net/images/album/Ataturk_FotoYraflarY_5.jpg",
                   "https://isteataturk.com/upload/images/1(9).jpg",
                   "https://upload.wikimedia.org/wikipedia/commons/e/e8/K.Atat%C3%BCrk_ve_Celal_Bayar.jpg",
                   "https://upload.wikimedia.org/wikipedia/commons/e/e5/Atat%C3%BCrk_ve_Amanullah_Han.jpg",
                   "https://www.gercekbizde.com/images/album/Mustafa_Kemal_Atatrkn_az_bilinen_fotoraflar_3.jpg",
                   "http://www.felsefetasi.org/wp-content/uploads/2017/02/fce351e408690f5a15e8560d714dcc6b.jpg",
                   "https://tiyatrolar.com.tr/files/exhibition/b/bir-onder-bir-deha-bir-insan-ataturk-fotograflari-sergisi/gallery/3943/bir-onder-bir-deha-bir-insan-ataturk-fotograflari-sergisi-3943.jpg",
                   "https://www.haber61.net/images/album/7_135.jpg",
                   "https://galeri14.uludagsozluk.com/763/en-karizmatik-liderin-ataturk-olmasi_1326807.jpg",
                   "https://galeri8.uludagsozluk.com/479/ataturk-un-inek-severken-cekilmis-fotografi_997884_m.jpg",
                   "https://i.pinimg.com/originals/18/e3/4c/18e34c601ff0dfa774fc830f4a5fba9b.jpg",
                   "http://4.bp.blogspot.com/-jvTQlYnNAjI/UsdDrUyKT0I/AAAAAAAAAho/Da-6BP9fmxg/s1600/Ataisim.jpg",
                   "https://i.pinimg.com/736x/a6/23/97/a623973759c7a3595d8c184b6b292ca7--turkey-istanbul.jpg",
                   "https://i.pinimg.com/originals/f6/b3/d6/f6b3d6dc2c465c29a827143e0addfd9a.jpg",
                   "https://i1.wp.com/www.istasy10.net/wp-content/uploads/2017/09/Mustafa-Kemal-Atat%C3%BCrk-2017-03-istasy10net.jpg",
                   "http://i2.haber7.net//fotogaleri/haber7/album/2018/40/mustafa_kemal_ataturkun_bilinmeyen_fotograflari_1538547916_714.jpg",
                   "https://galeri12.uludagsozluk.com/500/atat%C3%BCrk-%C3%BCn-%C3%A7ok-bilinmeyen-foto%C4%9Fraflar%C4%B1_734832_m.jpg",
                   "https://radorecdn.pckolog.com/enteresan/i/000/099/160/99160-isimsiz-icerik_f.jpg",
                   "http://www.haber19mayis.com/wp-content/uploads/13-2.jpg",
                   "http://d.haberciniz.biz/gallery/466_40.jpg",
                   "https://img-s2.onedio.com/id-59f58d5b61fa17d61d0d5f3b/rev-0/w-635/f-jpg-webp/s-b6dec24323d1db789f2ddb16d531e9422b53f353.webp",
                   "https://img-s2.onedio.com/id-5879e39888d1b21c2b7ea893/rev-0/raw/s-6490cd29b37f6e0864e34326b83e296deeb30a6c.jpg",
                   "https://static.ekspreshaber.com/resim/foto-galeri-icerik-resim/2017/10/30/mustafa-kemal-ataturk-un-cok-az-bilinen-fotograflari-930-13.jpg",
                   "http://millibilinc.com/resimler/20161122_165008.jpg",
                   "https://iasbh.tmgrup.com.tr/009d38/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2017/10/29/iste-ataturkun-pek-bilinmeyen-fotograflari-1509271679904.jpg",
                   "https://i.dunya.com/files/2017/5/19/363491/363491_0.jpg",
                   "https://www.61saat.com/images/upload/Trb2903.jpg",
                   "http://img03.blogcu.com/images/a/h/m/ahmetdursun374/9447bcabedc4b891a4bb25b30fe9b7d3_1295830031.png",
                   "http://www.haberdokuz.com/wp-content/uploads/ataturk-un-bilinmeyen-fotograflari-30-ekim-2013-3.jpg",
                   "https://image.istanbul.net.tr/uploads/2017/11/news/fotograflarla-ataturk--770x470.jpg",
                   "https://icdn.ensonhaber.com/resimler/galeri/9_7120.jpg",
                   "https://foto.yenikadin.com/galeri/2012/10/29/ilk-kez-yayinlanan-ataturk-fotograflari_60692_b.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("")
        .setColor("#FF69B4")
        .setFooter(` ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Atatürk, ataturk, Ataturk, atatürk'],
  permLevel: 0
};

exports.help = {
  name: 'Atatürk',
  description: 'Rastgele Atatürk gifi atar',
  usage: 'Atatürk'
}; 