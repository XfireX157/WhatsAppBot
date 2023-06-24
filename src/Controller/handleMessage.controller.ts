import { Message, Client, MessageMedia } from "whatsapp-web.js";
import { Strick } from "../Services/strick";
import { everyoneGrup } from "../Services/everyone";
import { menu } from "../Services/menu";

export const handleMessage = async (message: Message, client: Client) => {
  const command = message.body.toLowerCase().split(" ")[0];

  if (command === "!figurinha" || command.includes("figurinha")) {
    await Strick.ImageStrick(message, client);
  }
  if (command === "!everyone" || command.includes("everyone")) {
    await everyoneGrup(message, client);
  }
  if (command.includes("video")) {
    if (message.hasMedia) {
      const mimeType = await message.downloadMedia();
      console.log(mimeType);
      const media = new MessageMedia(mimeType.mimetype, mimeType.data);
      // const media = new MessageMedia(mimeType, data, fileName);
      await client.sendMessage(message.from, media, {
        sendMediaAsSticker: true,
      });
    }
  }
  if (command === "!help") {
    message.reply(menu);
  }
};
