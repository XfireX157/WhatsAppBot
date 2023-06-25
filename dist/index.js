"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = require("whatsapp-web.js");
const handleMessage_controller_1 = require("./Controller/handleMessage.controller");
const qrcode_terminal_1 = require("qrcode-terminal");
const dotenv_1 = require("dotenv");
const express_1 = require("express");
const body_parser_1 = require("body-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const client = new whatsapp_web_js_1.Client({
    puppeteer: {
        headless: false,
        args: ["--no-sandbox"],
    },
    authStrategy: new whatsapp_web_js_1.LocalAuth({
        clientId: "YOUR_CLIENT_ID",
    }),
});
client.on("qr", (qr) => {
    qrcode_terminal_1.default.generate(qr, { small: true });
});
client.on("message", async (message) => {
    await (0, handleMessage_controller_1.handleMessage)(message, client);
});
client.on("ready", () => {
    console.log("Client is ready!");
});
client.initialize();
app.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map