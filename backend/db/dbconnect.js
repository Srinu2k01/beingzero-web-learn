const mongoose=require('mongoose');
module.exports.conn=function(){
    var password=process.env.Mongo_atlas_password;
    var connectionstring="mongodb+srv://system:"+password+"@cluster0.suio8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(connectionstring,{useNewUrlParser:true,useUnifiedTopology:true});
    mongoose.connection.on('connected',function(){
    console.log("Database Connected");
})
}