const fs = require("fs");

fs.readFile("./files/read.txt", "utf-8", function(err, resStr){
    if(err){
        console.log("read failed" + err);
    }
    console.log(resStr);
})