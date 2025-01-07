/*
#IchigoZGZ
youtube : https://youtube.com/@Ichigozgz
buy no enc : https://wa.me/6285691587665
*/

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "6285691587665"
global.owner2 = "6285691587665"
global.namaowner = "𝑰𝒄𝒉𝒊𝒈𝒐𝒁𝑮𝒁👑"
global.botname = "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔"
//======== Setting Bot & Link ========//
global.namabot = "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔" 
global.namabot2 = "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔"
global.foother = "© - 𝙸𝚌𝚑𝚒𝚐𝚘𝚉𝙶𝚉"
global.versibot = "2.0.0"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17'
global.linksaluran = "https://whatsapp.com/channel/0029Vaul3axCHDykGBq9NJ17"
global.linkyt = 'https://youtube.com/@ichigoz'
global.linktele = 'https://t.me/ichizg'
global.packname = "ZANGETSU"
global.author = "𝐈𝐜𝐡𝐢𝐠𝐨𝙕𝙂𝙕👑"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "Maaf terjadi kesalahan..",
"done": "Succesfully ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer", 
"premium": "*• Premium Only* Fitur Ini Hanya Untuk user premium"

}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})