
const {v4 : uuidv4} = require("uuid");

const users = [

    {
        id : uuidv4(),
        name: "shattajit",
        email : "jeet.shatta@gmail.com"
    },

    {
        id : uuidv4(),
        name : "anis",
        email : "anis@gmail.com"
    }
];

module.exports = users;