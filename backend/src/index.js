import express from 'express';

const app = express();
const port = 3300;


app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
});