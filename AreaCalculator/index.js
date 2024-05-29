
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const PORT = 3000;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res)=>{
    res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res)=>{
    res.sendFile(__dirname + "/triangle.html");
});


app.post("/circle", (req, res)=>{
    const radius = req.body.radius;

    const area = Math.PI * radius * radius;

    res.send(`<h3>The area of the circle is: ${area}</h3>`);
    res.end();
});

app.post("/triangle", (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;

    const area = 0.5 * base * height;

    res.send(`<h3>The area of the triangle is: ${area}</h3>`);
    res.end();
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})