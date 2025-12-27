const express = require('express')
const app = express()
app.get('/', (req,res)=>{
    req.send('Food Api is Running');
});
modules.exports= app;