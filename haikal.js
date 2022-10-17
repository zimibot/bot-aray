/*
› Create By Haikal
› Base Ori Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : Funtsu BOT */

//=================================================//
require('./hwkal')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const cl = require('caliph-api')
const crypto = require('crypto')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const google = require('google-it')
const mathjs = require('mathjs')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
// const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
// const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./baseikal/lib/register')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
// const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme, Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const content = JSON.stringify(m.message)
//=================================================//
const kalimage = fs.readFileSync('./baseikal/image/hwmodsgans.jpg')
const thumbnail = fs.readFileSync('./baseikal/image/mamak.jpg')
const mekih = fs.readFileSync('./baseikal/image/deden.jpeg')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const P = require('pino')
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
let attackInterval = null
let actv = false
let int

//=================================================//
// Function
wm = 'Funtsu BOT'
//=================================================//
// Time & Date
// const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

// if (time2 < "18:00:00") {
// 	var ucapanWaktu = 'Selamat Sore'
// }
// if (time2 < "15:00:00") {
// 	var ucapanWaktu = 'Selamat Siang'
// }
// if (time2 < "11:00:00") {
// 	var ucapanWaktu = 'Selamat Pagi'
// }
// if (time2 < "05:00:00") {
// 	var ucapanWaktu = 'Selamat Malam'
// }
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		//=================================================//
		const isCmd = body.startsWith(prefix)
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const botNumber = await haikal.decodeJid(haikal.user.id)
		const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const isBan = banned.includes(m.sender)
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
		const from = mek.key.remoteJid
		//=================================================//
		// Group
		const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => { }) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		// const welcm = m.isGroup ? wlcm.includes(from) : false
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		const AntiLink = m.isGroup ? ntilink.includes(from) : false
		// const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
		// const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
		const _registered = JSON.parse(fs.readFileSync('./baseikal/dbnye/registered.json'));
		const register = JSON.parse(fs.readFileSync('./baseikal/dbnye/register.json'));
		const isRegistered = checkRegisteredUser(m.sender)
		//=================================================//
		const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
		// Random Image Simple Menu
		let picaks = [flaming, fluming, flarun, flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		//document randomizer
		const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
		const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const qtod = m.quoted ? "true" : "false"
		// Date
		moment.tz.setDefault("Asia/Jakarta").locale("id");

		//=================================================//
		const hw = {
			key: {
				fromMe: true,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {})
			},
			"contextInfo": {
				"stanzaId": "3EB0382EDBB2",
				"externalAdReply": {
					"previewType": "PHOTO",
					"showAdAttribution": true,
					"sourceUrl": `https://youtube.com`,
					"thumbnailUrl": 'https://i.pinimg.com/736x/27/06/01/2706011422d09dd3ebbc0d0adfdcfe0b.jpg',
					"thumbnail": kalimage
				}
			}
		}
		//=================================================//
		const doc = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {})
			},
			"message": {
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
					"mimetype": "application/octet-stream",
					"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
					"fileLength": "604455",
					"pageCount": 1,
					"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
					"fileName": `Funtsu BOT${ngazap(prefix)}`,
					"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
				}
			}
		}
		//=================================================//
		//=================================================//
		const bal = (teks) => {
			haikal.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": `Funtsu BOT ${ngazap(prefix)}`, "body": `Funtsu BOT ${ngazap(prefix)}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": kalimage, "sourceUrl": `https://youtube.com/c/HwModsWa857` } } }, { quoted: doc })
		}
		// Target
		const reply = (teks) => {
			return haikal.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": `SC Funtsu BOT`, "body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": kalimage, "sourceUrl": `https://youtube.com/c/HwModsWa857` } } }, { quoted: hw })
		}

		const anjay = (teks) => {
			haikal.sendMessage(m.chat, {
				image: kalimage, caption: teks, contextInfo: {
					"externalAdReply": {
						"title": `SC Funtsu BOT`, "body": `Selamat ${salam} kak ${pushname} ${teks}`,
						previewType: "PHOTO",
						showAdAttribution: true,
						sourceUrl: `https://youtube.com/`,
						thumbnailUrl: 'https://i.pinimg.com/736x/27/06/01/2706011422d09dd3ebbc0d0adfdcfe0b.jpg',
						thumbnail: kalimage,
					}
				}
			}, { quoted: hw })
		}
		//=================================================//
		// const deploy = (teks) => {
		// 	haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb } } } }, {})
		// }
		//=================================================//
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
			}
			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
			} else global.db.data.chats[m.chat] = {
				mute: false,
			}
		} catch (err) {
			console.log(err)
		}
		//=================================================//

		try {
			ppuser = await haikal.profilePictureUrl(m.sender, 'image')
		} catch (err) {
			ppuser = 'https://c4.wallpaperflare.com/wallpaper/808/726/442/maria-sama-ga-miteru-girl-open-mouth-question-mark-wallpaper-preview.jpg'
		}
		ppnyauser = await getBuffer(ppuser)
		// reset limit every 12 hours
		let cron = require('node-cron')
		cron.schedule('00 12 * * *', () => {
			let user = Object.keys(global.db.data.users)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			for (let jid of user) global.db.data.users[jid].limit = limitUser
			console.log('Reseted Limit')
		}, {
			scheduled: true,
			timezone: "Asia/Jakarta"
		})

		//=================================================// 
		// Public & Self
		if (!haikal.public) {
			if (!m.key.fromMe) return
		}
		//console bukan kontol
		if (m.message) {
			console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
				green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat'), 'args :', chalk.green(text.length))
		}

		var sticBanLu = (hehe) => {
			ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
			haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
		}

		// Mute Chat
		if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
			return
		}
		//=================================================//
		// AntiLink
		if (AntiLink) {
			linkgce = await haikal.groupInviteCode(from)
			if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
				anjay(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
			} else if (isUrl(m.text)) {
				bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
				if (isAdmins) return anjay(bvl)
				if (m.key.fromMe) return anjay(bvl)
				if (isCreator) return anjay(bvl)
				kice = m.sender
				await haikal.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => anjay(jsonformat(res))).catch((err) => anjay(jsonformat(err)))
				haikal.sendMessage(from, { text: `\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo: { mentionedJid: [kice] } }, { quoted: hw })
			} else {
			}
		}
		//=================================================//
		// Respon Cmd with media
		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
			let { text, mentionedJid } = hash
			let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
				userJid: haikal.user.id,
				quoted: hw.quoted && m.quoted.fakeObj
			})
			messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
			messages.key.id = m.key.id
			messages.pushName = m.pushName
			if (m.isGroup) messages.participant = m.sender
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			}
			haikal.ev.emit('messages.upsert', msg)
		}
		//=================================================//
		if (budy.startsWith('©️')) {
			if (!isCreator) return
			if (isBan) throw sticBanLu(from)
			if (!isRegistered) return replyReg(mess.verif)
			try {
				return anjay(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
			} catch (e) {
				anjay(e)
			}
		}
		//=================================================//
		//Suit PvP
		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					haikal.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
					delete this.suit[roof.id]
					return !0
				}
				roof.status = 'play'
				roof.asal = m.chat
				clearTimeout(roof.waktu)
				//delete roof[roof.id].waktu
				haikal.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
				if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
				if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) haikal.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						haikal.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
					}
					delete this.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0]
				roof.text = m.text
				anjay(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				anjay(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
				delete this.suit[roof.id]
			}
		}
		//=================================================//
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			anjay(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
		}
		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			anjay(`
Hello Saya Bot Funtsu Bot ${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}

		async function boardsTrello() {
			let api = await axios.get(`${global.urlTrello}/1/members/me/boards?fields=name,url&key=${global.keyTrello}&token=${global.tokenTrello}`)

			return new Promise(resolve => {
				resolve(api.data);
			});
		}

		async function labelTrello(idboard) {
			let api = await axios.get(`${global.urlTrello}/1/boards/${idboard}/lists?&key=${global.keyTrello}&token=${global.tokenTrello}`)
			return new Promise(resolve => {
				resolve(api.data);
			});
		}

		async function listTrello(idboard) {
			let api = await axios.get(`https://api.trello.com/1/boards/${idboard}/cards?fields=all&key=${global.keyTrello}&token=${global.tokenTrello}`)
			return new Promise(resolve => {
				resolve(api.data);
			});
		}
		async function moveCard(cardID, idboard, listID) {
			let api = await axios.put(`https://api.trello.com/1/cards/${cardID}?idBoard=${idboard}&idList=${listID}&key=${global.keyTrello}&token=${global.tokenTrello}`)

		}

		function limitText(text) {
			var spaces = text.split(' ').length - 1; // remove 1 for index 0 later

			var count = 40;

			var result = text.substr(0, count + spaces);

			return result
		}

		async function listBoardItem(params, title = "") {
			let data = await boardsTrello()
			let sc = [
				{
					title: "[!] Selected Board",
					rows: []
				}
			]
			data.map((d) => {
				sc[0]?.rows.push({
					title: `📂 *${d.name.toUpperCase()}*`,
					rowId: `${params}-${d.id}-${d.name?.replace(/ /g, "_")}`,
					description: d.url
				})
			})

			const message = {
				text: "ℹ️ _You are currently in the list of (Aray Board)_",
				footer: "PT Aray Megah Antawirdja | https://aray.ma",
				title: `🚀 ARAY BOARD - ${title}`,
				buttonText: "View all Board",
				sections: sc,
			}

			// haikal.sendTextMessage(m.chat, "hello everyone")
			haikal.sendMessage(m.chat, message)
		}




		let cmd = command?.split("-")

		console.log(cmd)

		let listBoard = async () => {
			let dataLabel = await labelTrello("63395a99b2f9ae0216b9da5e")
			let dataList = await listTrello("63395a99b2f9ae0216b9da5e")
			let ls = dataLabel?.map(s => {
				return ({
					label: s.name,
					rows: dataList?.filter((elem) => elem.idList === s.id)
				})
			})

			let teks = `*DETAIL LIST PROJECT \n\n`

			ls.map(d => {
				teks += `*Status :* *${d.label}*\n*-----------------------------------------*\n${d.rows.map(s => { return `# ${s.name}\n` })}\n`
			})

			await haikal.sendText(m.chat, teks.replace(/,/g, ""))
		}







		if (cmd[0] === "movelistitems") {
			let dataLabel = await labelTrello(cmd[1])
			let dataList = await listTrello(cmd[1])
			let ls = dataLabel?.map(s => {
				return ({
					label: s.name,
					rows: dataList?.filter((elem) => elem.idList === s.id)
				})
			})

			let dr = ls?.map(d => ({
				title: d.label,
				rows: d.rows.map((s) => {
					return (
						{
							title: `📝 *${limitText(s.name)}..*`,
							rowId: `cardid-${s.id}-idboard-${s.idBoard}-idlist-${s.idList}-name-${s.name?.replace(/ /g, "_")}-position-${d.label}`,
							description: s.desc.length === 0 ? `\nCurrent Task position: *[${d.label.toUpperCase()}]*` : `\n${s.desc}\n+-------------------------------------------+\nUrl : ${s.shortUrl}\nLast Activity : ${moment(s.dateLastActivity).format("DD/MM/YYYY")}\nCurrent Position: *${d.label}*	`
						}
					)
				})
			}))

			const message = {
				title: `📂 ${cmd[2].replace(/_/g, " ").toUpperCase()}`,
				text: `ℹ️ _You are currently inside (${cmd[2].replace(/_/g, " ")}) Please choose the Available Task inside to update it_`,
				footer: "",
				buttonText: "View all Task",
				sections: dr,
			}

			await haikal.sendMessage(m.chat, message)

		}


		if (cmd[0] === "onlylist") {
			let dataLabel = await labelTrello(cmd[1])
			let dataList = await listTrello(cmd[1])
			let ls = dataLabel?.map(s => {
				return ({
					label: s.name,
					rows: dataList?.filter((elem) => elem.idList === s.id)
				})
			})

			let teks = `*DETAIL LIST PROJECT | ${cmd[2].replace(/_/g, " ").toUpperCase()}*\n\n`

			ls.map(d => {
				teks += `*Status :* *${d.label}*\n*-----------------------------------------*\n${d.rows.map(s => { return `# ${s.name}\n` })}\n`
			})

			await haikal.sendText(m.chat, teks.replace(/,/g, ""))
		}

		if (!command.match(' ') && cmd[0] === "cardid") {

			let dataLabel = await labelTrello(cmd[3])

			let sc = [
				{
					title: "MOVE TASK",
					rows: []
				}
			]

			dataLabel.map(d => {
				sc[0].rows.push(
					{
						title: `*${d.name.toUpperCase()}*`,
						rowId: `idmove-${d.id}-idcard-${cmd[1]}-idboard-${d.idBoard}-name-${d.name?.replace(/ /g, "_")}-title-${cmd[7]}-position-${cmd[9].replace(/ /g, "_")}`,
						description: ""
					}
				)
			})

			const message = {
				text: "ℹ️ _These Task has been selected and ready to updated_",
				footer: "",
				title: `📝 ${cmd[7].replace(/_/g, " ")}`,
				buttonText: "Update The Status",
				sections: sc,
			}

			// haikal.sendTextMessage(m.chat, "hello everyone")
			haikal.sendMessage(m.chat, message)

			// console.log(dataLabel)


		}

		if (cmd[0] === "idmove") {
			// ℹ️ _SUCCESS Aditya Galih Wicaksono Updated Task: (integrasi el wagyl to xsoar cortex)_
			// FROM *${cmd[11].replace(/_/g, " ").toUpperCase()}* TO *${cmd[7].replace(/_/g, " ").toUpperCase()}*
			let teks = `✅ *[${cmd[9].replace(/_/g, " ")}]* FROM *[${cmd[11].replace(/_/g, " ").toUpperCase()}]* TO *[${cmd[7].replace(/_/g, " ").toUpperCase()}]*\n\n_SUCCESS *${m.pushName}* Updated Task:  (${cmd[9].replace(/_/g, " ")}_)`
			moveCard(cmd[3], cmd[5], cmd[1])
			// haikal.sendText(m.chat, `✅ SUCCESS (*${cmd[9].replace(/_/g, " ")}*) MOVED TO : *${cmd[7].replace(/_/g, " ").toUpperCase()}*`)
			haikal.sendText('120363044599933154@g.us', teks)
			if (!m.isGroup) {
				haikal.sendText(m.chat, teks)
			}

		}

		console.log(command)


		switch (command) {
			case 'tr': {
				// console.log(m)
				listBoardItem("movelistitems", " (UPDATE)")
			}
				break
			case 'tr-on':
			case 'tr-off': {
				// console.log(m)
				let sp = command.split("-").pop()

				if (actv && sp !== "off") {
					haikal.sendText(m.chat, "Trello Auto Update Sudah aktif")
				} else if (sp === "on") {
					int = setInterval(() => {
						const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
						if (`${time2}` === "06:00:00" || `${time2}` === "19:00:00") {
							listBoard()
						}
						console.log(time2)
					}, 1000);
					actv = true
					haikal.sendText(m.chat, "Trello Auto Update aktif at 06:00:00 and 19:00:00")
				}

				if (sp === "off") {
					clearInterval(int)
					haikal.sendText(m.chat, "Trello off")
					actv = false
				}



			}
				break

			case 'trlist': {
				listBoardItem("onlylist", " (HANYA LIST)")

				// haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
			}
		}


	} catch (err) {
		m.reply(util.format(err))
	}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})