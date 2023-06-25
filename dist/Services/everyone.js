"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyoneGrup = void 0;
async function everyoneGrup(message, client) {
    try {
        const chat = await message.getChat();
        let text = "";
        let mentions = [];
        for (let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }
        await chat.sendMessage(text, { mentions });
    }
    catch (e) {
        message.reply("❌ Não foi possível marcar todos do grupo");
    }
}
exports.everyoneGrup = everyoneGrup;
