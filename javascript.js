const form=document.getElementById("form");
const username=document.getElementById("username");
const number=document.getElementById("phone");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");

form.addEventListener('submit',(event)=>{
    
    event.preventDefault();
    validate();
})

function setErrorMsg(input,errormsgs){
    const formControl =input.parentElement;
    const small =formControl.querySelector("small");
    small.innerText =errormsgs;

    formControl.className="form-control error";
    
}
function setSuccessMsg(input){
    const formControl =input.parentElement;
    formControl.className="form-control success";
    const small =formControl.querySelector("small");
    small.innerText ="";
    
}
const isEmail=(emailVal) =>{
    var atsymbol =emailVal.indexOf('@');
    if(atsymbol <1) return false;
    var dot =emailVal.lastIndexOf('.');
    if(dot <= atsymbol+3) return false;
    if(dot===emailVal.length -1) return false;
    return true;
}

const sendData=(usernameVal,sRate,count) =>{
    if(sRate===count){
        swal("Welcome "+ usernameVal , "You are logged in Successfully", "success");
        location.href='index.html';
        
    }
}
const successMsg =(usernameVal) =>{
    let formCon=document.getElementsByClassName('form-control');
    var count=formCon.length-1;
    for(var i=0 ;i<formCon.length;i++) {
        if(formCon[i].className==="form-control success"){
            var sRate=0+i;
            console.log(sRate);
            sendData(usernameVal,sRate,count);
        }
        else{
            return false;
        }
    }
}
//final validation

function validate(){
    const usernameVal=username.value.trim();
    const numberVal=phone.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    
    //username validate
    if(usernameVal===""){
        setErrorMsg(username,"username cannot be blank");
     } else if(usernameVal.length <= 2){
         setErrorMsg(username,"username min 3 char");
    } else{
         setSuccessMsg(username);
    }
// email VAL
    if(emailVal===""){
        setErrorMsg(email,"email cannot be blank");
     } else if(emailVal.length <= 3){
        setErrorMsg(email,"email is invalid");
    } else if(!isEmail(emailVal)){
        setErrorMsg(email,"invalid email");
    } else{
        setSuccessMsg(email);
    }

// phone val
    if(numberVal===""){
        setErrorMsg(number,"phone number cannot be blank");
    } else if(numberVal.length!=10)
    {
        setErrorMsg(phone,"invalid phone no.");
        setSuccessMsg(phone);
    } else{
        setSuccessMsg(phone);
    }
//password
    if(passwordVal===""){
        setErrorMsg(password,"password cannot be blank");

    } else if(passwordVal.length<=5){
        setErrorMsg(password,"password has to be of minimum 6 characters");

    } else{
        setSuccessMsg(password);


    }


//password
if(cpasswordVal===""){
    setErrorMsg(cpassword,"cpassword cannot be blank");

} else if(passwordVal !== cpasswordVal){
    setErrorMsg(cpassword,"recheck confirm password");

} else{
    setSuccessMsg(cpassword);

}
  successMsg(usernameVal);
}
