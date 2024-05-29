const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    // const id = req.query.id;
    // const name = req.query.name;

    const {name, id} = req.query;

    res.end(`name is: ${name} and id is: ${id}`);
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})