const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    //id:{type:Number,unique:true},
    coursename:String,
    Articles:Number,
    //isDeleted:Boolean
});


module.exports=mongoose.model('coursetable',userSchema);