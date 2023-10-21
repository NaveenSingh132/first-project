const questions=[
    {
        'que':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'Which year javascript launched?',
        'a':'1963',
        'b':'1965',
        'c':'1994',
        'd':'none of these',
        'correct':'b'
    },
    {
        'que':'what CSS stands for?',
        'a':'HTML',
        'b':'Cascading Style Sheet',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'b'
    },
]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const optionInputs=document.querySelectorAll('.option');
const quesBox=document.querySelector(".quesBox");
function loadquestion(){
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;

    optionInputs[0].innerText=data.a;
    optionInputs[1].innerText=data.b;
    optionInputs[2].innerText=data.c;
    optionInputs[3].innerText=data.d;
}

const submitQuiz=()=> {
    const data =questions[index];
    const ans= getAnswer();
    if(ans==data.correct){
    right++;}
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
            }
        
    )
}

const endQuiz=()=>{
    document.querySelector('.main').innerHTML=`<h3>Thank you for playing!!</h3> <br> <h2>${right} / ${total} are correct!!</h2>`;
}

loadquestion();

/* Template literals, also known as template strings, 
are a feature in JavaScript that allow you to create
more flexible and readable strings by embedding variables
and expressions directly within the string. They are enclosed
by backticks ( ) instead of single or double quotes. Template
literals support multi-line strings and allow for string interpolation.

Here's an example to help illustrate how template literals work:

const name = "Alice";
const age = 30;

// Using concatenation with regular strings
const messageConcatenation = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(messageConcatenation);

// Using template literals
const messageTemplateLiteral = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(messageTemplateLiteral);
*/



/*
.checked is a property in JavaScript that is used to determine whether a checkbox 
or radio button is checked or not. It returns a boolean value, 
true if the checkbox or radio button is checked, and false if it's not checked.
*/