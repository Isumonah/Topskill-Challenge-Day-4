let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("button-el");
let result = document.getElementById("result");
let numbers = document.getElementById("numbers");
let resultEl = document.getElementById("result-el");


let myNumber = []

buttonEl.addEventListener("click", function(){
    if(myNumber.length === 5){
        alert("You can only choose 5 numbers");
    }
    else if(myNumber.length === 4){
    myNumber.push(inputEl.value);
    numbers.innerHTML += inputEl.value
    inputEl.value = "";
    }

    else{
    myNumber.push(inputEl.value);
    numbers.innerHTML += inputEl.value + ", "
    inputEl.value = "";
    }
    

})


resultEl.addEventListener("click", function(){
    let sum = 0;
    for (let i = 0; i < myNumber.length; i++){
        sum += parseInt(myNumber[i]);
        result.textContent = "Sum  = " + sum
        
    }

})
