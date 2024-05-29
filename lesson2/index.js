const fs = require('fs');

fs.writeFile('demo.txt', `my name is shattajit`, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("successful!");
    }
});

fs.appendFile('demo.txt', ` my name is shattajit ghosh`, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("successful!");
    }
});

fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

fs.rename('demo.txt', 'demo2.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});

fs.unlink('demo2.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});