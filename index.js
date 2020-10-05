const express = require("express");
const {Pool} = require('pg');
const app = express();
let port = process.env.PORT || 3000;
let url = process.env.DATABASE_URL 

const pool = new Pool({
 connectionString: url,
 ssl: {
 rejectUnauthorized: false
 }
});

app.get("/",(req,res) =>{
    res.send("Hello Word");
    pool.connect();
});

app.listen(port,()=>{
    console.log("example");
});