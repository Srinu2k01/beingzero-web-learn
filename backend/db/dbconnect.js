const mongoose=require('mongoose');

const config=require('../config/configlib');
connectionstring=config.mongoConnectionString;
dboptions={useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true};
//dboptions={useNewUrlParser:true,useUnifiedTopology:true};var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true
//connectionstring=config.mongoConnectionString;
module.exports.conn=function(){
    // var password=process.env.Mongo_atlas_password;
    // var connectionstring="mongodb+srv://system:"+"vssj1944"+"@cluster0.suio8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(connectionstring,dboptions);
    mongoose.connection.on('connected',function(){
    console.log("Database Connected");
})
}