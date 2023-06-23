import { Client, LocalAuth, Message } from "whatsapp-web.js";
import { everyoneGrup } from "./Services/everyone";
import { Strick } from "./Services/strick";
import qrcode from "qrcode-terminal";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = 3004;

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
  const command = message.body.toLowerCase().split(" ")[0];
  // const sender = message.from.includes("49430485") ? message.to : message.from
  if (command === "!figurinha" || command.includes("figurinha")) {
    await Strick(message, client);
  }
  if (command === "!everyone" || command.includes("everyone")) {
    await everyoneGrup(message, client);
  }
  if (command == "!help" || command.includes("help")) {
    message.reply(
      `🌟 *Comandos* 🌟

        1. ⚡️!help - Exibe a lista de comandos disponíveis.
        2. ⚡️!everyone - Menciona todos os usuários.
        3. ⚡️!figurinha - Cria uma figurinha a partir de uma imagem.
        4. ⚡️!gif - Cria uma figurinha a partir de um gif.
        5. 💥!gpt - Interage com o modelo GPT-3.5. (Beta test 1.0).`
    );
  }
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

app.post("/enviar-mensagem", async (req: Request, res: Response) => {
  try {
    const { numero, message } = req.body;
    console.log(numero, message);

    await client.sendMessage(numero, message);

    res
      .status(204)
      .json({ success: true, ok: "Messagem enviada com sucesso!" });
  } catch (err) {
    console.log(err, "erro no post");
  }
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
