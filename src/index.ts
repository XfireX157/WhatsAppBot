import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { everyoneGrup } from "./Services/everyone";
import { Strick } from "./Services/strick";
import qrcode from "qrcode-terminal";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { handleMessage } from "./Controller/handleMessage.controller";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = new Client({
  puppeteer: {
    headless: false,
    args: ["--no-sandbox"],
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
  },
  authStrategy: new LocalAuth({
    clientId: "YOUR_CLIENT_ID",
  }),
});

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
});

client.on("message", async (message: Message) => {
    await handleMessage(message, client)
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

app.listen(process.env.PORT, () => {
  console.log(`rodando na porta ${process.env.PORT}`);
});
