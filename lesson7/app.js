const express = require("express");
const app = express();
const userRouter = require("./routes/api.route");


app.use(userRouter);

// app.post("/", (req, res)=>{
//     res.send(`I am post method`);
// });

// app.put("/", (req, res)=>{
//     res.send(`i am put method`);
// });

// app.delete("/", (req, res)=>{
//     res.send(`i am delete method`);
// });


app.use("/register", (req, res)=>{
    res.statusCode = 201;
    res.sendFile(__dirname+"/views/register.html");

 res.cookie("name", "shattajit");
res.end();
})

app.use((req, res)=>{
    res.send(`error!!!`);
});




module.exports = app;

