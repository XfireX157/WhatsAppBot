import {  Client, Message, MessageMedia } from "whatsapp-web.js";

export const Strick = {
  async ImageStrick(message: Message, client: Client) {
    if (message.type === "image" || message.type === "video") {
      try {
        const { data } = await message.downloadMedia();
        const mimeType = message.type === "image" ? "image/jpeg" : "image/gif";
        const fileName = message.type === "image" ? "image.jpg" : "image.gif";
        const media = new MessageMedia(mimeType, data, fileName);
        console.log(media)
        await client.sendMessage(message.from, media, {
          sendMediaAsSticker: true,
        });
        
      } catch (e) {
        console.log(e)
        message.reply("❌ Erro ao processar imagem");
      }
    }
  },
};
