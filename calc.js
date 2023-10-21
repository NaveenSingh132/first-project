let string=" ";
let memoryValue;
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }

        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }

        else if (e.target.innerHTML === 'M+') {
            memoryValue += parseFloat(string);
            string = "";
            document.querySelector('input').value = string;
        } 
        
        else if (e.target.innerHTML === 'M-') {
            memoryValue -= parseFloat(string);
            string = "";
            document.querySelector('input').value = string;
        }

        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
    })
})


/*
document.querySelectorAll('button') selects all HTML 
button elements in the document and returns a NodeList, 
which is an array-like object containing references to those button elements.

Array.from(buttons) takes the NodeList returned by 
querySelectorAll() and converts it into a real array.
*/