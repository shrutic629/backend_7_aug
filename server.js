const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const fileURLtopath = require("url");
const PORT = 5000;

const app = express();

app.use(express.json())
app.use(express.static(path.resolve(__dirname,"./public")))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","index.html"))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","contact.html"))
})

app.listen(5000,()=>{
    console.log(`server is listening on ${PORT}`.bgRed.Green)
})

