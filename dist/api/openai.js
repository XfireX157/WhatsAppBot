"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGPT = void 0;
const axios_1 = __importDefault(require("axios"));
async function chatGPT(content, message) {
    try {
        const { data } = await axios_1.default.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content }],
            temperature: 0.7,
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_KEY}`
            }
        });
        return data.choices[0].message.content;
    }
    catch (err) {
        message.reply("❌ Não foi possível marcar todos do grupo");
    }
}
exports.chatGPT = chatGPT;
