import { Message } from "whatsapp-web.js";
export type ITemperatureType = {
    city: string;
    apiKey: string;
    message: Message;
};
