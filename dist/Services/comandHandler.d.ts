import { Client, Message } from "whatsapp-web.js";
declare const commandHandlers: {
    [command: string]: (message: Message, client: Client) => Promise<void> | void;
};
export default commandHandlers;
