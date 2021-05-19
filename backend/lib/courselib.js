const coursemodel= require('../models/coursemodel');
//const mongoose=require('mongoose');



module.exports.createcourse=async(req,res)=>
{
     try
     {  var object=req.body;
        var course=await coursemodel.create(object);
        console.log(req.body);
        console.log(course);
      res.json(course);
     }
     catch (error) {
        console.error(error);
      }  
    }

module.exports.getallcourses=async(req,res)=>
{
    try
    {   var course=await coursemodel.find();
        console.log(course);    
        res.json(course);
    }
    catch (error) {
        console.error(error);
      }  
}



// module.exports.createcourse=function(courseobj,callback){
//         var course=coursemodel(courseobj);
//         course.save(function(err,courseobj){
//             if (err){
//                 console.log("err"+err)
//             }

//                 })
// }


// module.exports.getallcourses=function(callback){
//     var query={}
//     coursemodel.find(query,function(err,courseobjArray){
//         if (err){
//             console.log(err);
//         }
//         else{
//             callback();
//         }
//     })
// }