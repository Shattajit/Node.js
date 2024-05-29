const {createNewUser, updateUser, deleteUser, allUsers} 
= require("../controllers/user.controller");


const route = require("express").Router();


route.post("/users", createNewUser);
route.put("/users/:id", updateUser);
route.delete("/users", deleteUser);
route.get("/users", allUsers);

module.exports = route;