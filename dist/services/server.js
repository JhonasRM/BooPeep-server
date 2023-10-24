"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("../routes/routes"));
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());
app.use(routes_1.default);
app.use((0, cors_1.default)()); // Adicione parênteses para chamar a função cors
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log('Listening on port 4000');
});
