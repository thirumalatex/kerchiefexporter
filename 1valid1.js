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

    window.location="https://rzp.io/l/SW7wXYVUPR"
        
        return false;
    
     }
         
    else{
        alert("Password Incorrect or Enter Properly");
    
    }  
}



function lpage(){
    window.location="7654321ordernow.html";
}