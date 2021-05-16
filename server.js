const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 var todos= [];
app.use(express.static(__dirname+"/frontend"));
app.get("/", function(req, res){
    let filepath=__dirname+"/frontend/html/basic.html";
    res.sendFile(filepath);
    
})
app.post('/api/todos', function(req, res){
      console.log("post call received");
     var newwork=req.body;// Create
     todos.push(newwork) ; 
     console.log(newwork) ;
     //console.log(todos)
     let filepath=__dirname+"/frontend/html/todo.html";
     res.sendFile(filepath);
         // req.body will have what frontend sent
     })
app.get('/api/get', function(req, res){
    console.log(todos)  
    res.json(todos)
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
app.get("/login", function(req, res){
    let filepath=__dirname+"/frontend/html/login.html";
    res.sendFile(filepath);
})
app.get("/register", function(req, res){
    let filepath=__dirname+"/frontend/html/register.html";
    res.sendFile(filepath);
})
app.get("/todoapp", function(req, res){
    let filepath=__dirname+"/frontend/html/todo.html";
    res.sendFile(filepath);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
