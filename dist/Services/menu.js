"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
async function menu(message) {
    try {
        message.reply(`🌟------------------ *Comandos* --------------------🌟
        1. ⚡️!help - Exibe a lista de comandos disponíveis.
        2. ⚡️!everyone - Menciona todos os usuários.
        3. ⚡️!figurinha - Cria uma figurinha a partir de uma imagem.
        4. ⚡️!temperatura e o "nome do lugar" - Mostrarar a temperatura da região. (🎉Funcionalidade nova🎉)
    `);
    }
    catch (err) {
        message.reply("❌ Não foi possível executar o menu");
    }
}
exports.menu = menu;
