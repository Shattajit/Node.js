const express = require('express');
const {v4 : uuidv4} = require("uuid");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const useRouter = require("./routes/user.route")

app.use("", useRouter);

app.use(cors());


//home page

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});


// different route

app.use((req, res, next)=>{
    res.status(404).json({essage : "route not found"});
});

// server error

app.use((err, req, res, next)=>{
    res.status(404).json({essage : err.message});
});

module.exports = app;