import { title } from "process";
import { Buttons, Client, Message, MessageMedia } from "whatsapp-web.js";

export const Strick = async (message: Message, client: Client) => {
  if (message.type === "image") {
    try {
      const { data } = await message.downloadMedia();
      const image = new MessageMedia("image/jpeg", data, "image.jpg");
      await client.sendMessage(message.from, image, {
        sendMediaAsSticker: true,
      });
    } catch (e) {
      message.reply("❌ Erro ao processar imagem");
    }
  }
};
