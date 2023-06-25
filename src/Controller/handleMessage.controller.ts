import { Message, Client, MessageMedia } from "whatsapp-web.js";
import commandHandlers from "../Services/comandHandler";

export const handleMessage = async (message: Message, client: Client) => {
  const command = message.body.toLowerCase().split(" ")[0];

  if (command in commandHandlers) {
    await commandHandlers[command](message, client);
  }
};
