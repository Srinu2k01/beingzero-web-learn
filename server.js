const express = require('express');

const app = express();
app.use(express.static(__dirname+"/frontend"));
app.get("/", function(req, res){
    let filepath=__dirname+"/frontend/html/basic.html";
    res.sendFile(filepath);
    
})
app.get("/resume", function(req, res){
    let filepath=__dirname+"/frontend/html/resume.html";
    res.sendFile(filepath);
})
app.get("/googlepage", function(req, res){
    let filepath=__dirname+"/frontend/html/google.html";
    res.sendFile(filepath);
})
app.get("/color", function(req, res){
    let filepath=__dirname+"/frontend/html/color.html";
    res.sendFile(filepath);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
