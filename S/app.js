import express from 'express';
import { TodoList } from './data.js';

import cors from 'cors'
//import fs from "fs";

const PORT = 9999;
const app = express();
app.use(express.json())
app.use(cors())
app.get('/cars', (req, res) => {
    res.json(TodoList);
});

app.post('/cars', (req, res) => {
console.log(req.body);
TodoList.push(req.body)
res.json(TodoList);
})

app.listen(PORT, () => console.log('Dieser Server läuft auf Port:', PORT));