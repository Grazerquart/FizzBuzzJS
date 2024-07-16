function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let endValue = document.getElementById("endValue").value;
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    endValue = parseInt(endValue);
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(endValue)){
        let numbers = generateFizzBuzz(fizzValue, buzzValue, endValue);
        displayFizzBuzz(numbers);
    } else {
        alert("You must enter a number.");
    }
}
function generateFizzBuzz(fizz, buzz, end) {
    let numbers = [];
    for(i = 1; i <= end; i++){
        if (i % fizz == 0 && i % buzz == 0) {
            numbers.push("FizzBuzz");
        } else if (i % fizz == 0) {
            numbers.push("Fizz");
        } else if (i % buzz == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}

function generateFizzBuzzB(fizz, buzz, end) {
    let arr = [];
    for (i =1; i <= end; i++) {
        fizzer = (i % fizz == 0);
        buzzer = (i % buzz == 0);
        switch (true) {
            case fizzer && buzzer: {
                arr.push("FizzBuzz");
                break;
            }
            case fizzer: {
                arr.push("Fizz");
                break;
            }
            case buzzer: {
                arr.push("Buzz");
                break;
            }
            default: {
                arr.push(i)
                break;
            } 
        }
    }
    return arr;
}
function generateFizzBuzzC(fizz, buzz, end) {
    let arr = [];
    for (let i = 1; i <=end; i++) {
        arr.push(( i % fizz == 0 ? "Fizz" : "") + ( i % buzz == 0 ? "Buzz" : "") || i);
    }
    return arr;
}

function displayFizzBuzz(numbers) {
    // Array index starts at zero so final element is length-1
    let templateCols = "";
    for(let i=0; i < numbers.length; i++) {
        let classname = "";
        if(numbers[i] == "FizzBuzz") {
            let classname = "fizzbuzz";
        templateCols += `<div class="col ${classname}">${numbers[i]},</div>`;
        } else if (numbers[i] == "Fizz") {
            let classname = "fizz";
        templateCols += `<div class="col ${classname}">${numbers[i]},</div>`;
        } else if (numbers[i] == "Buzz") {
            let classname = "buzz";
        templateCols += `<div class="col ${classname}">${numbers[i]},</div>`;
        } else {
        templateCols += `<div class="col ${classname}">${numbers[i]},</div>`;
        }
    }
    document.getElementById("outputData").innerHTML = templateCols;
}