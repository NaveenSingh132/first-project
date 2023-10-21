const endDate="10 August 2023 10:00 PM";
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");

function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    const diff=end-now/1000;

    if(diff<0)
    return;

    inputs[0].value = Math.floor(diff / 3600 /60) % 24;
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(function() {clock();}, 1000);



  /*  The setInterval() function is a built-in JavaScript 
    function that allows you to execute a specified function at a 
    specified interval (time delay). It's commonly used for tasks that 
    need to be repeated at regular intervals. The basic syntax of setInterval() is as follows:


    setInterval(callback, delay[, ...args]);



    callback: This is the function that you want to execute 
    repeatedly at the specified interval. It can be a function 
    reference or an anonymous function defined inline.
    delay: This is the time interval in milliseconds between
     each execution of the callback function.
    args (optional): Additional arguments that you want to 
    pass to the callback function. */
