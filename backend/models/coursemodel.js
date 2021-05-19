const coursemodel=require('mongoose');

var userSchema= new coursemodel.Schema({
    //id:{type:Number,unique:true},
    coursename:String,
    Articles:Number,
    isDeleted:Boolean
});

coursemodel.model('coursetable',userSchema);

module.exports.coursemodel;