const Moment = require('moment')
const Discord = require('discord.js')
module.exports = client => {
  
  const WILFLEAX = [
   "😷 Maskeni Takmayı Unutma!",
   "🔍 Allah Yardımcımız Olsun.",
   "👑 OyunCraft Hosting",
"🛠️ Prefix Değişti gh! Komutları Bilmiyorsan Ozaman gh!yardım Yaz!",
]
   console.log(`[${Moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar Yüklendi!`);
   console.log(`[${Moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
   console.log(`[${Moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun İsmi Ayarlandı!`);
 
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (WILFLEAX.length - 0))
    client.user.setActivity(WILFLEAX[Aktivite])
  }, 4000)
}
