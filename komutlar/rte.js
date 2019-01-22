const Discord = require('discord.js');

exports.run = (client, message, args) => { 
    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://media.discordapp.net/attachments/522492357292326954/528519075475750925/rte.png");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
        img    = imgs[0];
    moldura.resize(720, 620);  
    img.resize(720, 615) 
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));        
    });
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rte'],
  permLevel: 0
};

exports.help = {
  name: 'rte',
  description: 'rte',
  usage: 'rte'
};