"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strick = void 0;
const whatsapp_web_js_1 = require("whatsapp-web.js");
const axios_1 = __importDefault(require("axios"));
exports.Strick = {
    async ImageStrick(message, client) {
        if (message.type === "image") {
            try {
                const media = await message.downloadMedia();
                await client.sendMessage(message.from, media, {
                    sendMediaAsSticker: true,
                });
            }
            catch (e) {
                console.log(e);
                message.reply("❌ Erro ao processar imagem");
            }
        }
        if (message.type === "image") {
        }
        else {
            try {
                const url = message.body.substring(message.body.indexOf(" ")).trim();
                const { data } = await axios_1.default.get(url, { responseType: "arraybuffer" });
                const returnedB64 = Buffer.from(data).toString("base64");
                const image = new whatsapp_web_js_1.MessageMedia("image/jpeg", returnedB64, "image.jpg");
                await client.sendMessage(message.from, image, { sendMediaAsSticker: true });
            }
            catch (e) {
                message.reply("❌ Não foi possível gerar um sticker com esse link");
            }
        }
    },
};
