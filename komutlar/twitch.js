const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    const Twitch = require("twitch.tv-api");
const twitch = new Twitch({
    id: "fy9zlcrcm73h00rytct7eqvmr9zs8f",
    secret: process.env.TWITCH_SECRET
});
    twitch.getUser(args.join(" "))
    .then(data => {
         if(!data.stream) return message.reply(`\"${args.join(" ").charAt(0).toUpperCase()}${args.join(" ").slice(1)}\" Şuanda canlı yayında değil veya \"${args.join(" ").charAt(0).toUpperCase()}${args.join(" ").slice(1)}\" twitch kanalı yok!`)
        let embed = new Discord.RichEmbed()
        .setTitle(data.stream.channel.status)
        .setAuthor(data.stream.channel.display_name + " Canlı Yayında!")
        .addField("Oyun", data.stream.game, true)
        .addField("Yayın Linki", data.stream.channel.url, true)
        .addField("Takipçiler", data.stream.channel.followers, true)
        .addField("Açıklama", data.stream.channel.description, true)
        .setImage(data.stream.preview.large)
        .setURL(data.stream.channel.url)
        .setThumbnail(data.stream.channel.logo)
        .setTimestamp()
        .setColor(0x6441a5)
        .setFooter(`${message.author.username}`, message.author.avatarURL)
        message.channel.send(embed)
    })
    .catch(error => {
        console.error(error);
    });

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tw"],
  permLevel: 0
};

exports.help = {
  name: 'twitch',
  description: 'twitch kanalı hakkında bilgi verir',
  usage: 'twitch'
};