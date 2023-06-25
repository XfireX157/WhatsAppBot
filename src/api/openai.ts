import axios from "axios";
import { Message } from "whatsapp-web.js";

export async function chatGPT(content: string, message: Message) {
    try{
        const { data } = await axios.post(
            "https://api.openai.com/v1/chat/completions", 
            {
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content}],
                temperature: 0.7,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_KEY}`
                }
            }
        )
        return data.choices[0].message.content
    }catch(err) {
        message.reply("❌ Não foi possível marcar todos do grupo");
    }
}