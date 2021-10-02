const Discord = require('discord.js');
const db = require('quick.db');

let talkedRecently = new Set();

module.exports = async (message, member, args) => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 1000)

  let client = message.client;
  if (message.author.bot) return;
 const prefixler = ['gh!', 'g!'];
 let prefix = false;
 for(const prefixcık of prefixler) {
 if(message.content.startsWith(prefixcık)) prefix = prefixcık;
 } if(!prefix) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
      } else {
  }
  if (cmd) {
  if (db.get(`user_${message.author.id}.şartlar1`) != 'kabul edilmiş') {
      const warningEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`**Hey Bu botu kullanabilmek için şartları onaylamanız gerekmektedir.**\n\n**📘** butonuna basarak botun kullanım şartlarına bakabilirsin.`)

      const termsOfService = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`**1)Komutları Spam Yaparak Kullanmak Yasaktır Yapsanızda Cooldown Vardır Botta.\n\n2)Komutlarla Milleti Rahatsız Etmek Yasaktır.\n\n3)Her Hangi Bir Bugta Sorunda Destek Sunucumuza Geliniz Veya cp!bug Komutunu Kullanarak Bildirebilirsiniz.\n\n4)Bot Genellikle Geceleri Yeniden Başlatılıyor.**`)
      .setTitle(`${client.user.username} | Kullanım Şartları`);

      return message.channel.send(warningEmbed).then(async dolar => {
        await dolar.react('📘');
        await dolar.awaitReactions((youth, anasia) => youth.emoji.name == '📘' && anasia.id == message.author.id, { max: 1 })
        .then(async () => {
          await dolar.reactions.removeAll();
          await dolar.edit(termsOfService).then(async leavemealone => {
            await leavemealone.react('✅');
            await leavemealone.awaitReactions((youth, anasia) => youth.emoji.name == '✅' && anasia.id == message.author.id, { max: 1 })
            .then(async () => {
              await leavemealone.reactions.removeAll();
              await dolar.edit(termsOfService.setDescription('**Kullanım şartlarını kabul ettiniz. Artık botu kullanabilirsiniz!**'));
await message.author.send(`Destek Sunucumuza Sende Katıl https://discord.gg/4EWSdUfmX7 Server`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen Ortak Sunucumuz Yok Veya DM'si Kapalı.")));
              await db.set(`user_${message.author.id}.şartlar1`, 'kabul edilmiş');
            });
          });
        });
      })
    };
  if (message.author.id == db.fetch(`karaliste.${message.author.id}`))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setColor("BLACK")
          .setDescription(
            `Sahibim seni karalisteye \`${db.fetch(
              `karalistesebep.${message.author.id}`
            )}\` sebebiyle karalisteye almış! Komutları kullanamazsın..`
          )
          .setFooter(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
  cmd.run(client, message, params, perms).catch(err => client.channels.cache.get('889553698848661594').send(err.toString()));
  }
};
