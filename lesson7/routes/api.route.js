const express = require('express');
const router = express.Router();



router.get("/", (req, res)=>{
    res.send(`I am get method`);
});


router.post("/login", (req, res)=>{
    res.send(`I am post method`);
});

router.put("/contact", (req, res)=>{
    res.send(`i am put method`);
});

router.delete("/about", (req, res)=>{
    res.send(`i am delete method`);
});

module.exports = router;