const coursemodel=require('../models/coursemodel');

module.exports.createcourse=function(courseobj,callback){
        var course=coursemodel(courseobj);
        course.save(function(err,courseobj){
            if (err){
                console.log("err"+err)
            }

                })
}


module.exports.getallcourses=function(callback){
    var query={}
    coursemodel.find(query,function(err,courseobjArray){
        if (err){
            console.log(err);
        }
        else{
            callback();
        }
    })
}