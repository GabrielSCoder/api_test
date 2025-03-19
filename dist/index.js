"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/meet", (req, res) => {
    res.status(200).json({ success: true, message: "Olá!" });
});
app.listen(123, () => console.log("Server ready on port 3000."));
module.exports = app;
