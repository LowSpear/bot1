const Discord = require('discord.js');// gerekli yerleri doldurun.
const client = new Discord.Client()
const Shard = new Discord.ShardingManager('./lowspear.js', {// main dosyanız
totalShards: 1,//shard sayısı
token: ("NzQ3MzY4MDU3OTY5NTczOTUx.X0N2vg.v24eytKSYw4zHXmphFp5R7Qnh1E")
}); Shard.on('shardCreate', (shard, message, client) => { console.log(`${shard.id+1} IDli Shard Başlatıldı ve Kullanıma Hazır.`)
const webhook = new Discord.WebhookClient("890309087605178420","aXQEnxzgAOZW3-7yKnXt5SurNaMi-TINvdLUSkxia0g-W_cSMS5Mt36i5kcrncB7eXEB")
let embed = new Discord.MessageEmbed()
     .setDescription(`<a:emoji_53:875067380273934336> CrossPlex | ${shard.id+1} Id'li Shard Başlatılıyor Shard: ${shard.id+1} `)
     .addField("**» Linkler:**",`[(Bot Davet)](https://discord.com/oauth2/authorize?client_id=825858354797871134&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FsGWEGY7aPu&scope=bot) [(Destek Sunucu)](https://discord.gg/sGWEGY7aPu)`)
     .setTitle('Galatchi Shard Sistemi')
     .setColor('#cc6600')
 .setTimestamp();
webhook.send(embed)
setTimeout(() => {
const webhook = new Discord.WebhookClient("890309087605178420","aXQEnxzgAOZW3-7yKnXt5SurNaMi-TINvdLUSkxia0g-W_cSMS5Mt36i5kcrncB7eXEB")

let embed = new Discord.MessageEmbed()
     .setDescription(`<a:emoji_53:875067380273934336> CrossPlex | ${shard.id+1} Id'li Shard Başarıyla Açıldı Bot Aktif Shard: ${shard.id+1}`)
   .setTitle('Galatchi Shard Sistemi')
     .addField("**» Linkler:**",`[(Bot Davet)](https://discord.com/oauth2/authorize?client_id=825858354797871134&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FsGWEGY7aPu&scope=bot) [(Destek Sunucu)](https://discord.gg/sGWEGY7aPu)`)
     .setColor('#008000')
 .setTimestamp();
webhook.send(embed)
}, 5000)
});
Shard.spawn();