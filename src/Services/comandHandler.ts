import { Client, Message, MessageMedia } from "whatsapp-web.js";
import { menu } from "./menu";
import { obterTemperatura } from "../api/openWeather";
import { everyoneGrup } from "./everyone";
import { Strick } from "./strick";
import axios from "axios";

const commandHandlers: {
  [command: string]: (message: Message, client: Client) => Promise<void> | void;
} = {
  "!figurinha": async (message, client) => {
    await Strick.ImageStrick(message, client);
  },
  "!everyone": async (message, client) => {
    await everyoneGrup(message, client);
  },
  "!temperatura": async (message) => {
    const city = message.body.split("!temperatura")[1];
    const apiKey = process.env.API_KEY as string;
    await obterTemperatura({ city, apiKey, message });
  },
  "!help": (message) => {
    menu(message);
  },
};

export default commandHandlers;


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