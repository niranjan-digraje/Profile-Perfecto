const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,'')));

// //for database
// var con = mysql.createConnection({
//     host : "localhost",
//     user: "root",
//     password: "root"
// });

// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected to db");
// });

app.get("/",(req,res)=>{
    //res.send("Hi i am root");
    res.sendFile(path.join(__dirname,'public','index.html'));
})



//starting server
app.listen(8080,() =>{
    console.log("server is listining to port 8080");
});
