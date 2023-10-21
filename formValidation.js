const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
form.addEventListener('submit',(event)=>{
    event.preventDefault();  /* function used to prevent the default behaviour of an event 
    from occuring , like clicking on a link or submitting  a form , are triggered in a web page,they 
    have default actions associated with them, by calling 'event.preventDefault()' you can 
    default behavior from happening*/ 


    /* addEventListner() ,method of event target interface sets up a funtion that will 
   that will be called whenever the specified event is delivered to the target*/
    validate();  /* it is not a build in function in js */
})

function validate(){

const usernameVal=username.value.trim();
const emailVal=email.value.trim();
const phoneVal=phone.value.trim();
const passwordVal=password.value.trim();
const cpasswordVal=cpassword.value.trim();


/* trim() function is used to remove the extra space  */

// validate username

if(usernameVal===""){
    setErrorMsg(username,'username cannot be blank');
}  /* serErrormsg is not a build in function */
else if(usernameVal.length <= 2){
    setErrorMsg(username,'username min 3 char '); 
}
else{
    setErrorMsg(username);  
}


// validate email

const isEmail=(emailVal) =>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1) 
    return false;

if(emailVal===""){
    setErrorMsg(email,'username cannot be blank');
}  /* serErrormsg is not a build in function */
else if(!isEmail(emailVal)){
    setErrorMsg(email,'not a valid email '); 
}
else{
    setErrorMsg(email);  
}

//more email validate


    /*The indexOf() function is a built-in method in JavaScript 
    that is used to find the index of the first occurrence of a specified value within an array or a string. 
    It returns the index of the found item, or -1 if the item is not found.
    
    example:

    const fruits = ['apple', 'banana', 'orange', 'grape'];
    const bananaIndex = fruits.indexOf('banana');
    console.log(bananaIndex); // Outputs: 1
        
    */

    var dot=emailVal.lastIndexOf('.');
    if(dot<=atSymbol+2)
    return false;

    return true;
}

function setErrorMsg(input,errormsgs)
{
    const formControl=input.parentElement;
    const small =formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errormsgs;


    /*querySelector('small'): 
    This is a method available on DOM elements (like formControl) that allows 
    you to find and select a descendant element within the element's subtree. In this case, 
    it's looking for an HTML element with the tag name <small> within the formControl element's children.*/


  /*  formControl: This variable is assumed to hold a reference to an HTML element,
     which is typically a form control element like an input field or another form-related element.

    .className: This is a property of a DOM element that represents 
    the value of the class attribute for that element. 
    It allows you to get or set the classes assigned to the element.

    "form-control error": This is a string containing one or more class names. 
    In this case, it assigns two class names, "form-control" and "error", 
    to the class attribute of the formControl element.

    So, when you execute the statement formControl.className = "form-control error";,
     you are essentially replacing the existing classes of the formControl element with
      the classes "form-control" and "error". This is commonly used in CSS to
       apply specific styling based on the classes assigned to an element.


       example:

       <div class="form-control">
  <input type="text">
</div>


const formControl = document.querySelector('.form-control');
formControl.className = "form-control error";


<div class="form-control error">
  <input type="text">
</div>

*/

}

}



