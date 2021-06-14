const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    //id:Number,
    coursename:String,
    Articles:Number,
    //isDeleted:Boolean
});


module.exports=mongoose.model('coursetable',userSchema);