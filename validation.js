 function go() {
     var formstatus =true;
     var name=document.getElementById("fname").value;
     if(name == ""){
         formstatus=false;
         document.getElementById("fname").style.borderColor="red";
     }else{
     document.getElementById("fname").style.borderColor="green";
     
 }

//validation for mobile no
var mpattern = /^[6-9]\d{9}$/;
var mobileno =document.getElementById("mobile").value;
 if( !mpattern.test(mobileno) ){
     formstatus=false
     document.getElementById("mobile").style.borderColor="red";
 }
 else{
     document.getElementById("mobile").style.borderColor="green";
 }
 //for email validation
    var epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = document.getElementById("emailid").value;
    if( !epattern.test(email)){
        formstatus=false;
        document.getElementById("emailid").style.borderColor="red";
    }else{	
        document.getElementById("emailid").style.borderColor="green";
    }
//validation for password empty and min lenght validation

    var pass = document.getElementById("mypassword").value.trim();
    if(pass.length<6){
        formstatus=false;
        document.getElementById("mypassword").style.borderColor="red";
    }else{
        document.getElementById("mypassword").style.borderColor="green";
    }
//radio button as grnder validation
var m=document.getElementById("male").checked;
var f=document.getElementById("female").checked;
if(m==false && f==false){
    formstatus=false;
    document.getElementById("gendererror").innerText="Invalid Gender";
}
else{
    document.getElementById("gendererror").innerText=" ";
}
//validation for dropdown
  
     var city = document.getElementById("city").value;
     if(city == ""){
         formstatus=false;
         document.getElementById("city").style.borderColor="red";
     }
     else{
         document.getElementById("city").style.borderColor="green"
     }
//validation for textarea
     var add=document.getElementById("address").value;
     if(add.length<50){
         formstatus=false;
         document.getElementById("address").style.borderColor="red";
     }
     else{
         document.getElementById("address").style.borderColor="green";
     }
//validation for checkbox
     var tnc=document.getElementById("tnc").checked;
     if(tnc==false){
         formstatus=false
         document.getElementById("tncerror").innerText="This Field is required";

     }
     else{
        document.getElementById("tncerror").innerText=" ";
     }
// do not write anything after this line
 if(formstatus==true){
     
     document.getElementById("message").innerText="Success Please Wait ...";
    document.getElementById("myform").submit();
 }
 else{
    document.getElementById("message").innerText="Fail, Invalid Input";
 }
 }
 