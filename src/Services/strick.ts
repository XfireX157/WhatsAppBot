import {  Client, Message, MessageMedia } from "whatsapp-web.js";
 
export const Strick = {
  async ImageStrick(message: Message, client: Client) {
    if (message.type === "image") {
      try {
        const media = await message.downloadMedia();
        await client.sendMessage(message.from, media, {
          sendMediaAsSticker: true,
          sendVideoAsGif: true
        });
        
      } catch (e) {
        console.log(e)
        message.reply("❌ Erro ao processar imagem");
      }
    }
  },
};
