let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
function validate(){


       if(email.value==""||pwd.value==""){
           alert("Field's cannot be empty");
           return false;
       }
       else if(email.value=="admin"&&pwd.value==12345){
          error.innerHTML = "valid";
          error.style.color = "green";
          return true;
       }

       else{
          error.innerHTML = "invalid";
          error.style.color = "red";
          return false;
      }

   
   
}