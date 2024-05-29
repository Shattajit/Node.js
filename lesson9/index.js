
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = 3000;

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/registration", (req, res)=>{

    const firstName = req.body.firstName;
    const age = req.body.age;

    res.send(`Your name is: ${firstName} and your age is: ${age}`);
});

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});