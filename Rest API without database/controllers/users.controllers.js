const {v4 : uuidv4} = require("uuid");
let users = require("../models/users.model");


const getAllUser = (req, res)=>{
    res.status(200).json({users});
};


const createUser = (req, res)=>{

    const newUser = {
        id : uuidv4(),
        name : req.body.name,
        email : req.body.email,
    };
    users.push(newUser);
    res.status(200).json({users});
};

const updateUser = (req, res)=>{

    const id = req.params.id;

    const {name, email} = req.body;

    users.filter((user) => user.id === id).map((selected)=>{
        selected.name = name;
        selected.email = email;
    });

    res.status(200).json(users);
};

const deleteUser = (req, res)=>{

    const id = req.params.id;

    users = users.filter((user) => user.id !== id);

    res.status(200).json(users);
}


module.exports = {getAllUser, createUser, updateUser, deleteUser};