const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.giphy.com/media/rhrqyAqXsddssupHLg/giphy.gif?cid=790b7611eef9732c2df1a1943b1410612aebb1a63a8950cc&rid=giphy.gif&ct=g'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://media.giphy.com/media/rhrqyAqXsddssupHLg/giphy.gif?cid=790b7611eef9732c2df1a1943b1410612aebb1a63a8950cc&rid=giphy.gif&ct=g');
hook.send(`📢 \`${message.guild.name}\` **Sunucu Kurallar**

\`¤\` **Reklam** Sunucu **İçi** Yasaktır. **(Yetkililere bildirmelisiniz.)**
\`¤\` **Ses** & **Chat** odalarında **Küfür**, **Troll**, **Rahatsız** etmek & **Bass** Yasaktır.
\`¤\` Kişisel sorunlarınızı **sunucuya** taşımak, Düzeni **bozmak**, Çıkan **tartışmayı** uzatmak Yasaktır.
\`¤\` **Din**, **dil**, **ırk**, Cinsiyetçilik ayrımı Yasak.
\`¤\` **Cinsel içerikli** görseller paylaşmak Yasaktır.
\`¤\` **Spam**, **flood** ve **caps** Yasaktır.

\`¤\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**

> \`Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};