import { Message, Client } from "whatsapp-web.js";
import { Strick } from "../Services/strick";
import { everyoneGrup } from "../Services/everyone";
import { menu } from "../Services/menu";
import { obterTemperatura } from "../api/openWeather";

export const handleMessage = async (message: Message, client: Client) => {
  const command = message.body.toLowerCase().split(" ")[0];
  const city = message.body.split("!temperatura")[1];
  const apiKey = process.env.API_KEY as string;

  if (command === "!figurinha" || command.includes("figurinha")) {
    await Strick.ImageStrick(message, client);
  }
  if (command === "!everyone" || command.includes("everyone")) {
    await everyoneGrup(message, client);
  }
  if (command === "!temperatura" || command.includes("temperatura")) {
    await obterTemperatura({ city, apiKey, message });
  }
  if (command === "!help") {
    message.reply(menu);
  }
};
