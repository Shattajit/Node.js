
const express = require('express');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.end("Hello");
});

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});