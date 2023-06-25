import { Client, Message, MessageMedia } from "whatsapp-web.js";
import axios from "axios";

export const Strick = {
  async ImageStrick(message: Message, client: Client) {
    if (message.type === "image") {
      try {
        const media = await message.downloadMedia();
        await client.sendMessage(message.from, media, {
          sendMediaAsSticker: true,
        });
      } catch (e) {
        console.log(e);
        message.reply("❌ Erro ao processar imagem");
      }
    }if(message.type === "image") {
      
    } else {
      try {
        const url = message.body.substring(message.body.indexOf(" ")).trim();
        const { data } = await axios.get(url, { responseType: "arraybuffer" });
        const returnedB64 = Buffer.from(data).toString("base64");
        const image = new MessageMedia(
          "image/jpeg",
          returnedB64,
          "image.jpg"
        );
        await client.sendMessage(message.from, image, { sendMediaAsSticker: true });
      } catch (e) {
        message.reply("❌ Não foi possível gerar um sticker com esse link");
      }
    }
  },
};
