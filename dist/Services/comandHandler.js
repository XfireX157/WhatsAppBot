"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("./menu");
const openWeather_1 = require("../api/openWeather");
const everyone_1 = require("./everyone");
const strick_1 = require("./strick");
const commandHandlers = {
    "!figurinha": async (message, client) => {
        await strick_1.Strick.ImageStrick(message, client);
    },
    "!everyone": async (message, client) => {
        await (0, everyone_1.everyoneGrup)(message, client);
    },
    "!temperatura": async (message) => {
        const city = message.body.split("!temperatura")[1];
        const apiKey = process.env.API_KEY;
        await (0, openWeather_1.obterTemperatura)({ city, apiKey, message });
    },
    "!help": (message) => {
        (0, menu_1.menu)(message);
    },
};
exports.default = commandHandlers;
// "!test": async (message, client) => {
//   try {
//     const url = "https://i.imgur.com/r9aU2xv.gif";
//     const { data: mediaData } = await axios.get(url, {
//       responseType: "arraybuffer",
//     });
//     const buffer = Buffer.from(mediaData, "binary");
//     const base64Data = buffer.toString("base64");
//     const media = new MessageMedia("image/gif", base64Data);
//     client.sendMessage(message.from, media, {
//       sendVideoAsGif: true
//     })
//   } catch (err) {
//     message.reply("❌ Não foi possível executar o menu");
//   }
// },
