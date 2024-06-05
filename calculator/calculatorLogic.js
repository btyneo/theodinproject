const add = function(...args) {
    return args.reduce((acc, currentValue) => acc + currentValue, 0);
  };

const subtract = function(...args) {
    return args.reduce((accumulator, currentValue) => accumulator - currentValue)};


const multiply = function(...args) {
    return args.reduce((acc, curr) => acc * curr, 1)};

const divide = function(...args) {
    return args.reduce((acc, curr) => acc / curr)};



let firstNum; 
let secondNum;
let operator;

function operate(num1, num2, operateSign) {
    if (operateSign == "add") {
        return add(num1, num2)
    }
    else if (operateSign == "subtract") {
        return subtract(num1, num2)
    }
    else if (operateSign == "multiply") {
        return multiply(num1, num2)
    }
    else if (operateSign == "divide") {
        return divide(num1, num2)
    }
}


container = document.querySelector(".container")
secondContainer = document.createElement("div")
thirdContainer = document.createElement("div")
fourthContainer = document.createElement("div")
fifthContainer = document.createElement("div")
sixthContainer = document.createElement("div")
container.appendChild(secondContainer)
container.appendChild(thirdContainer)
container.appendChild(fourthContainer)
container.appendChild(fifthContainer)
container.appendChild(sixthContainer)



function createCalculator() {
    calculatorElements = ["CLEAR", "/", "*", "7", "8", "-", "4", "5", "+", "1", "2", "3", "0", "=", "DEL"]
    let container;
    calculatorElements.forEach(element => {
        let currentIndex = calculatorElements.indexOf(element)
        if (currentIndex <= 2) {
            container = secondContainer
        }
        else if (currentIndex > 2 && currentIndex <= 5) {
            container = thirdContainer
        }
        else if (currentIndex > 5 && currentIndex <= 8) {
            container = fourthContainer
        }
        else if (currentIndex > 8 && currentIndex <= 11) {
            container = fifthContainer
        }
        else if (currentIndex > 11 && currentIndex <= 14) {
            container = sixthContainer
        }



        const button = document.createElement("button");
        button.textContent = element;
        button.style.fontSize = "30px";
        container.appendChild(button)
        if (currentIndex == 0 || currentIndex == 13) {
            button.style.backgroundColor = "orange"
        }
        else if (currentIndex == 14) {
            button.style.backgroundColor = "maroon"
        }

        else if (currentIndex in [1, 2, 5] || currentIndex == 5 || currentIndex == 8 ){
            button.style.backgroundColor = "green"
        }

        button.addEventListener("click", () => {
            switch (element) {
                case "+": 
                    break;
                // add the update display function here;
                case "-": 
                    break; 
                    // add the update display function here;
                case "*": 
                    break;
                // add the update display function here;
                case "/": 
                    // add the update display function here;
                    break;
                case "=":
                    // add the update display function here;
                    break;
                case "CLEAR": 
                    // add the update display function here;
                    break;
                case "DEL":
                    // add the update display function here;
                    break;
                default: 
                    // add the update display function here;
                    break;
                
            }

        })
    })
}

createCalculator()
// firstNumber = document.createElement("div")
// secondNumber = document.createElement("div")
// operator = document.createElement("div")
// container.appendChild(firstNumber)
// container.appendChild(secondNumber)
// container.appendChild(operator)
