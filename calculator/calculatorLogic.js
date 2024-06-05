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


function resetDisplay() {
    textContent.textContent = ""
}



container = document.querySelector(".container")

//creating display on top of calculator
displayBar = document.createElement("div")
displayBar.classList.add("displayBar")
textContent = document.createElement("div")
textContent.classList.add("textContent")
displayBar.appendChild(textContent)
container.appendChild(displayBar)




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
    calculatorElements = ["7", "8", "9", "CLEAR", "4", "5", "6", "DEL", "1", "2", "3", "+", "0", "/", "*", "-", "π", ".", "="]
    let container;
    calculatorElements.forEach(element => {
        let currentIndex = calculatorElements.indexOf(element)
        if (currentIndex <= 3) {
            container = secondContainer
        }
        else if (currentIndex > 3 && currentIndex <= 7) {
            container = thirdContainer
        }
        else if (currentIndex > 7 && currentIndex <= 10) {
            container = fourthContainer
        }
        else if (currentIndex > 11 && currentIndex <= 15) {
            container = fifthContainer
        }
        else if (currentIndex > 14 && currentIndex <= 19) {
            container = sixthContainer
        }



        const button = document.createElement("button");
        button.textContent = element;
        button.style.color = "#e8e1d8"
        button.style.fontSize = "30px";
        button.style.backgroundColor = "#6c7173";
        container.appendChild(button)
        if (element == "CLEAR"  || element == "DEL") {
            button.style.backgroundColor = "orange"
        }
        else if (element == "+" || element == "-" || element == "*" || element == "/") {
            button.style.backgroundColor = "green"
        }
        
        else if (currentIndex === 18) {
            button.style.paddingLeft = "70px";
            button.style.paddingRight = "70px";
            
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
                case "π": 
                     // add the update display function here;
                     break;
                case ".":
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

