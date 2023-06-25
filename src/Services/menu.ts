import { Message } from "whatsapp-web.js";

export async function menu(message: Message) {
  try {
    message.reply(
        `🌟------------------ *Comandos* --------------------🌟
        1. ⚡️!help - Exibe a lista de comandos disponíveis.
        2. ⚡️!everyone - Menciona todos os usuários.
        3. ⚡️!figurinha - Cria uma figurinha a partir de uma imagem.
        4. ⚡️!temperatura e o "nome do lugar" - Mostrarar a temperatura da região. (🎉Funcionalidade nova🎉)
    `);
  } catch (err) {
    message.reply("❌ Não foi possível executar o menu");
  }
}
