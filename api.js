function json(){

  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
      if(this.readyState==4&&this.status==200){
          var json= JSON.parse(this.responseText);
          for(i=0;i<json.length;i++){
              myFun();
              function myFun() {
                 var  table = document.getElementById("table");
                  var row = table.insertRow();
                  var x1 = row.insertCell();
                  var x2 = row.insertCell();
                  
                  if(json[i].completed===true){
                      var getdata=document.createElement("INPUT");
                      getdata.setAttribute("type", "checkbox");
                      getdata.setAttribute("checked", true);
                      getdata.setAttribute("disabled", true);
                      x1.appendChild(getdata);
                  }
                  else{
                      var create=document.createElement("INPUT");
                      create.setAttribute("type", "checkbox");
                      create.setAttribute("name", "select");
                      create.setAttribute("onchange", "promi()");
                      x1.appendChild(create); 
                  }
                  x2.innerHTML = json[i].title;
                }
          }
      }
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
}
json();

function promi(){
    var checkboxes = document.getElementsByName("select");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    } 
   // console. log(numberOfCheckedItems); 
    var promise=new Promise(function(resolve,reject){ 
        if(numberOfCheckedItems==5){
             resolve("Congrats you have successfully completed 5 tasks");
        }      
        else{
            reject("error");
        }

    });
    promise.then(function(a){alert(a)}).catch(function(b){console.log(b)})
    
}  








