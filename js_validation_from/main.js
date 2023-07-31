var submit = document.getElementById("submit")
submit.onclick=function(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;

    if (name == "" || email == ""){
        alert("you have to filled both option");
        return;
 
      }
 
      if (name.length<6 || name.length> 50 ){
 
         alert("name will be gater than 6 and smaller than 12");
         return;
      }
 
      
      if (email.slice(0,1) == "-" || email.slice(0,1) == "@"){
         alert("email should not start with @,-");
      }
      if (name.slice(0,1) == "-" || name.slice(0,1) == "@"){
         alert("name should not start with @,-");
      }

      else{
        alert("you log in successfully")
      }
 
 
 
     }
 
 
 
   

