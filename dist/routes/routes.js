"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const routes = express.Router();
const users = [
    {
        id: 1,
        name: 'John Dias',
        email: 'contato@gmail.com',
        password: 123456
    }
];
routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send('email');
});
exports.default = routes;
