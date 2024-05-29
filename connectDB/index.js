
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const PORT = 3000;

// mongoose.connect('mongodb://127.0.0.1:27017/testProductDb')
// .then(()=>{
//     console.log(`db is connected successfully`);
// })
// .catch((err)=>{
//     console.log(err);
//     process.exit(1);
// })

const connectDb = async()=>{
   try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testProductDb');
        console.log(`db is connected`);

   } catch (error) {
        console.log(`db is not connected!!`);
        console.log(error);
        process.exit(1);
   }
};

const productsSchema = new mongoose.Schema({
    title : {
        type : String

    },
    price : Number,
    description : String,

    createdAt : {
        type : Date,
        default : Date.now,
    }

});

const newModel = mongoose.model("Products", productsSchema);

app.get("/", (req, res)=>{
    res.send(`ok server is running`);
});

app.post("/products", async(req, res)=>{
   
    try {
        const title = req.body.title;
        const price = req.body.price;
        const description = req.body.description;
    
        const newData = new newModel({
            title : title,
            price : price,
            description : description
        });

        const addData = await newData.save();
        res.status(201).send(addData);

    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

// finding all products

app.get("/products", async(req, res)=>{
    try {

        const pr = req.query.price;

        const allProducts = await newModel.find({price : {$gt: pr}}).sort({price: -1}).select({title:1});

        if(allProducts){
            res.status(201).send(allProducts);
        }
        else{
            res.status(404).send({message: "Products not found!"});
        }

    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

// finding products by id

app.get("/products/:id", async (req, res)=>{

    try {
        const id = req.params.id;

        const singleProduct = await newModel.find({_id: id});

        if(singleProduct){
            res.status(200).send(singleProduct);
        }
        else{
            res.status(404).send({message: "id not found!"});
        }
    } catch (error) {
        res.status(500).send({message : error.message});
    }
});

// update in mongodb

app.put("/products/:id", async(req, res)=>{
    try {
        const id = req.params.id;

        const updatedData = await newModel.findByIdAndUpdate({_id : id}, 
            {
                $set : {
                    title : req.body.title,
                    price : req.body.price,
                    description : req.body.description
                },
            },
            {
                new : true
            }
        );

        if(updatedData){
            res.status(200).send(updatedData);
        }
        else{
            res.status(404).send({message : "data is not updated"});
        }

    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

app.listen(PORT, async()=>{
    console.log(`server is running at http://localhost:${PORT}`);

    await connectDb();
});