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
            numbers.push("Fizzbuzz");
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
function displayFizzBuzz(numbers) {
    // Array index starts at zero so final element is length-1
    let templateCols = "";
    for(let i=0; i < numbers.length; i++) {
        let classname = "";
        if(numbers[i] == "Fizzbuzz") {
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