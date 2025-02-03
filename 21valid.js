function myfunction(){
    var x =document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var username = document.getElementById("username").value;
    
    var password = document.getElementById("password" ).value;
    
  

    
    if(username=="admin" && password=="000"){
     
         alert("Login Succesful Click OK to Continue");

    window.location="87654321products.html"
        
        return false;
    
     }
         
    else{
        alert("Password Incorrect or Enter Properly");
    
    }  
}



function lpage(){
    window.location="87654321products.html";
}