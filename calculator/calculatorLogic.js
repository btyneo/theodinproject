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




secondmContainer = document.createElement("div")
thirdmContainer = document.createElement("div")
fourthmContainer = document.createElement("div")
fifthmContainer = document.createElement("div")
sixthmContainer = document.createElement("div")
container.appendChild(secondmContainer)
container.appendChild(thirdmContainer)
container.appendChild(fourthmContainer)
container.appendChild(fifthmContainer)
container.appendChild(sixthmContainer)





function createCalculator() {
    calculatorElements = ["7", "8", "9", "CLEAR", "4", "5", "6", "DEL", "1", "2", "3", "+", "0", "/", "*", "-", "π", ".", "="]
    let container;
    calculatorElements.forEach(element => {
        let currentIndex = calculatorElements.indexOf(element)
        if (currentIndex <= 3) {
            container = secondmContainer
        }
        else if (currentIndex > 3 && currentIndex <= 7) {
            container = thirdmContainer
        }
        else if (currentIndex > 7 && currentIndex <= 10) {
            container = fourthmContainer
        }
        else if (currentIndex > 11 && currentIndex <= 15) {
            container = fifthmContainer
        }
        else if (currentIndex > 14 && currentIndex <= 19) {
            container = sixthmContainer
        }



        const button = document.createElement("button");
        button.textContent = element;
        button.style.color = "#e8e1d8"
        button.style.fontSize = "30px";
        button.style.backgroundColor = "#6c7173";
        container.appendChild(button)

        
        if (element == "CLEAR") {
            button.style.backgroundColor = "orange"
            
            
        }
        else if (element == "*" || element == "/") {
            button.style.backgroundColor = "green"
            
        }
        else if (element == "+" || element == "-") {
            button.style.backgroundColor = "green"
            button.style.paddingLeft = "70px";
            button.style.paddingRight = "70px";
        }
        
        else if (currentIndex === 18) {
            button.style.paddingLeft = "70px";
            button.style.paddingRight = "70px";
            button.style.backgroundColor = "#2f3030"
            
        }
        else if (element == "π" ) {
            button.style.paddingLeft = "72px";
            button.style.paddingRight = "72px";
            
            
        }
        else if (element == ".") {
            button.style.backgroundColor = "#474a4a"
        }
        else if (element == "DEL") {
            button.style.paddingLeft = "50px";
            button.style.paddingRight = "50px";
            button.style.backgroundColor = "orange"
        }
        else if (element == "0") {
            button.style.paddingLeft = "40px";
            button.style.paddingRight = "40px";
        }
      

        button.addEventListener("click", () => {
            switch (element) {
                case "=":
                    calculateEquation()
                    break;
                case "CLEAR": 
                    resetDisplay()
                    break;
                case "DEL":
                    removeOneItem()
                    break;
                case "π": 
                    updateDisplay(3.1415)
                     break;
              
                default: 
                    updateDisplay(element)
                    break;
                
            }

        })
    })
}




function calculateEquation() {
    
    let expression = textContent.textContent;
    console.log(expression)
    let operators = ["+", "-", "*", "/"];
    let numbers = expression.split(new RegExp(`[${operators.map(op => op === '-' ? '\\' + op : op).join('')}]`, 'g')).map(parseFloat);
    let operatorIndexes = expression.split('').map((char, index) => operators.includes(char) ? index : '').filter(String);
    let result = numbers[0];
    

    operatorIndexes.forEach((index, i) => {
        let nextNumber = numbers[i + 1];
        let operator = expression[index];
        

        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber !== 0) {
                    result /= nextNumber;
                } else {
                    result = "Error: Division by zero";
                }
                break;
        }
    });

    textContent.textContent = result.toString();
    
}



function removeOneItem() {
    textContent.textContent = textContent.textContent.slice(0, -1)
    
}
function updateDisplay(input) {
    textContent.textContent = textContent.textContent + input

}


createCalculator()

