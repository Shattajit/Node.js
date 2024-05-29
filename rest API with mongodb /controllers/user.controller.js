const {v4 : uuidv4} = require("uuid");

const User = require("../models/user.model");


const createNewUser = async(req, res)=>{

    try {
        const newUser = new User({
            id : uuidv4(),
            name : req.body.name,
            age : req.body.age
        });
    
        await newUser.save();
    
        res.status(200).send(newUser);
    } catch (error) {

        res.status(500).send({message : error.message});
    }
};

const updateUser = async(req, res)=>{

    try {

        const user = await User.updateOne({id : req.params.id}, 
            {
                $set : {
                    name : req.body.name,
                    age : req.body.age
                },
            }
        );
        res.status(200).send(user);

    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

const deleteUser = async(req, res)=>{

    try {
        await User.deleteOne({ _id : req.query.id});
        res.status(200).send({message: "deleted the user"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};

const allUsers = async(req, res)=>{
    try {
        const users = await User.find();

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

module.exports = {createNewUser, updateUser, deleteUser, allUsers};