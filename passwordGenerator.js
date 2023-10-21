const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqstuvwxyz";
const numberSet="1234567890";
const symbolSet="!@#$%^&*()_+";

const passbox=document.querySelector('.displayPass');
const lenbox=document.querySelector('.len');
const upperInput=document.querySelector('.upper');
const lowerInput=document.querySelector('.lower');
const nunberInput=document.querySelector('.number');
const symbolInput=document.querySelector('.symbol');

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword = (Password="") =>{

    if(upperInput.checked){
        Password+=getRandomData(upperSet)
    }

    if(lowerInput.checked){
        Password+=getRandomData(lowerSet)
    }

    if(nunberInput.checked){
        Password+=getRandomData(numberSet)
    }

    if(symbolInput.checked){
        Password+=getRandomData(symbolSet)
    }
    if(Password.length<lenbox.value){
        return generatePassword(Password)
    }
    passbox.value=Password;
    
}


document.querySelector('button').addEventListener("click",function(){
    generatePassword();
})

generatePassword();
