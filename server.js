const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/",(req,res) =>{
    res.send("Hello Word");

});

app.listen(port,()=>{
    console.lot("example");
});