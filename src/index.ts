import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { handleMessage } from "./Controller/handleMessage.controller";
import qrcode from "qrcode-terminal";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = new Client({
  puppeteer: {
    headless: false,
    args: ["--no-sandbox"],
  },
  authStrategy: new LocalAuth({
    clientId: "YOUR_CLIENT_ID",
  }),
});

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
});

client.on("message", async (message: Message) => {
  await handleMessage(message, client);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

app.listen(process.env.PORT, () => {
  console.log(`rodando na porta ${3004}`);
});
