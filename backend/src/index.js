import express from 'express';
import clienteController from './controller/clienteController.js';

const app = express();
const port = 3300;

clienteController(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
});