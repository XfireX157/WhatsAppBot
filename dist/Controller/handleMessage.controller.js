"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = void 0;
const comandHandler_1 = require("../Services/comandHandler");
const handleMessage = async (message, client) => {
    const command = message.body.toLowerCase().split(" ")[0];
    if (command in comandHandler_1.default) {
        await comandHandler_1.default[command](message, client);
    }
};
exports.handleMessage = handleMessage;
//# sourceMappingURL=handleMessage.controller.js.map