$(document).ready(function(){
  
  $("#create").click(function(){ 
    var Data={To_do : $("#to-do").val(),
             id:$("#id").val()};
    $.ajax( {
     url: `http://${window.location.host}/api/todos`,
       type: 'POST',
       data:{To_do : $("#to-do").val(),
             id:$("#id").val()},
      success: function ( result )
      {
        $("#to-do").val("");
        $("#id").val("");
        console.log(Data);
     },
     error: function ( error )
     {
         console.log( error );
     },
  });
  });
  $("#get").click(function(){ 
    $.ajax( {
       url: `http://${window.location.host}/api/get`,
       type: 'GET',
       success: function ( result )
      {
       // result = JSON.parse( result );
        
          console.log(result);
    },
    error: function ( error )
    {
        console.log( error );
    },
  });
  });
});