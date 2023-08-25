import { Client, Message, MessageMedia } from "whatsapp-web.js";
import { menu } from "./menu";
import { obterTemperatura } from "../api/openWeather";
import { everyoneGrup } from "./everyone";
import { Strick } from "./strick";

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