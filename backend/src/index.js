import express from 'express';
import clienteController from './controller/clienteController.js';
import clienteDatabase from './database/db.js';

const app = express();
const port = 3300;

clienteController(app)
clienteDatabase()

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
});