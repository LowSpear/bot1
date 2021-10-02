const Discord = require('discord.js');
const db = require("quick.db")
 
exports.run = async (client, message, args) => {

const botistatistik = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('= Bot İstatistikleri Hazırlanıyor =')
      .setDescription(`**Bu mesajı silmeyin**`)
message.delete()
message.channel.send(botistatistik)
      .then(msg => {
        db.set("istatistik.kanal", msg.channel.id)
        db.set("istatistik.msg", msg.id)
      })
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ik'],
  permLevel: 0
}
 
exports.help = {
    name: "setup",
    description: "açıklama",
    usage: "istatistiksetup"
  };