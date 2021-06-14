const userModel  = require('../models/userModel');

module.exports={
    isUserValid : function(userJson, cb){
    // Select * from users where username="" and password=""
    // Select * from users

    // Do not pass req.body directly as query
    // if req.body = {username:'username'}


    // How to write this query to say, isDelete not equal to true

    //var query = {username: userJson.username, password:userJson.password, isDeleted:false};

    var query = {username: userJson.username, password:userJson.password, isDeleted:{$ne : true}};

    userModel.find(query, function(err, collections){
        var response = {success: false, message: 'Login Failed', user: null };
        if(err){
            response.message = 'Server Side Error Occured, Try again after some time';
            return cb(response);
        }
        if(collections.length==0){
            response.message = 'Invalid username/password';
            return cb(response);
        }
        response.success = true;
        response.message = 'Login Successful';
        response.user = {username: collections[0].username};
        cb(response);
    })
    },
    createuser:function(data,cb){
        var response={error:"no error",success:true,user:"user",userid:"userid",message:"nothing"};
        var record={email:data.email,role:data.role,password:data.password,username:data.username}
        userModel.create(record,function(err,data)
        {
           if(err)
           {
            response.message="invalid user";
            response.success=false;
            response.error=err;
            return cb(response);
           }
           else{
            response.message="successful";
            response.success=true;
            response.user=data.username;
            response.userid=data._id;
            return cb(response);

           }   
        }
        )
}
}