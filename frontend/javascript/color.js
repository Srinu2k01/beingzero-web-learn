function change(){
    //console.log("hello");
    var r=document.getElementById("myRange1").value;
    var g=document.getElementById("myRange2").value;
    var b=document.getElementById("myRange3").value;
    document.getElementById("value1").innerHTML=r;
    document.getElementById("value2").innerHTML=g;
    document.getElementById("value3").innerHTML=b;
    document.getElementById("colorset").style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`; 
    document.getElementById("colorset").innerHTML= `rgb( ${r}, ${g}, ${b} )`; 
}