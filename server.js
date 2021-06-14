const express = require('express');
const app = express();
//var router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const dbconnect=require('./backend/db/dbconnect.js');
const configlib=require('./backend/config/configlib');
const userLib = require('./backend/lib/userLib');
dbconnect.conn();
app.use(express.static(__dirname+"/frontend"));
//const courselib=require('./backend/lib/courselib.js');
app.post('/api/login', function(req, res) {
    //var responseJson = {success: true, message: 'Login Failed', user: null };
    userLib.isUserValid(req.body, function(resultJson){
        // if(resultJson.success==true){
        //     console.log("Session for User Initialized");
        //     req.session.user = {username: resultJson.username}; // Init session object for this user
        // }
        res.json(resultJson);
    })
});
app.post('/api/createuser',function(req,res){
    console.log("request came")
    userLib.createuser(req.body,function(resultJson){
        console.log(resultJson);
        res.json(resultJson);
    })
})
// app.post('/crud/post',courselib.createcourse)
// app.get('/crud/get', courselib.getallcourses)
// app.delete('/crud/delete', courselib.deleteallcourses)
// app.delete('/crud/deleteone',courselib.delete)


 var todos= [];
app.get("/", function(req, res){
    let filepath=__dirname+"/frontend/html/basic.html";
    res.sendFile(filepath);

})
// app.post('/api/todos', function(req, res){
//       console.log("post call received");
//      var newwork=req.body;// Create
//      todos.push(newwork) ; 
//      console.log(newwork) ;
//      //console.log(todos)
//      let filepath=__dirname+"/frontend/html/todo.html";
//      res.sendFile(filepath);
//          // req.body will have what frontend sent
//      })
// app.get('/api/get', function(req, res){
//     console.log(todos)  
//     res.json(todos)
// })
app.get("/api/register", function(req, res){
    let filepath=__dirname+"/frontend/html/register.html";
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
app.get("/crud", function(req, res){
    let filepath=__dirname+"/frontend/html/crud.html";
    res.sendFile(filepath);
})
app.get("/loginpage", function(req, res){
    let filepath=__dirname+"/frontend/html/index.html";
    res.sendFile(filepath);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(configlib.webPort, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
