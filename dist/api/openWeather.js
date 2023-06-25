"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obterTemperatura = void 0;
async function obterTemperatura({ city, apiKey, message }) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
        const res = await fetch(url);
        const data = await res.json();
        const climatic = {
            temperature: data.main.temp,
            name: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
        };
        await message.reply(`
        Temperatura atual: ${parseInt(climatic.temperature)}ºC  
        ------------------------------------------
        Nome: ${climatic.name}
        ------------------------------------------
        Humidade: ${climatic.humidity}
        ------------------------------------------
        Descrição: ${climatic.description}
    `);
    }
    catch (error) {
        message.reply(`❌ Não foi possível pegar a temperatura de ${city}`);
    }
}
exports.obterTemperatura = obterTemperatura;
//# sourceMappingURL=openWeather.js.map