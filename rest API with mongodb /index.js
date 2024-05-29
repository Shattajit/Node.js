const app = require("./app");

const mongoose = require("mongoose");


const PORT = 3000;


// database connection

const connectDB = async()=>{
    
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Rest_api_with_database');
        console.log(`db is connected`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

app.listen(PORT, async()=>{
    console.log(`server is running at http://localhost:${PORT}`);

    await connectDB();
});