


container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap"; // very important. wraps the squares in the available space 
container.style.justifyContent = "center";



function makeGrid(boxesPerSide=16) {


    let containerSize = 480;
    let squareSize = containerSize / boxesPerSide;

    for (let i = 0; i < boxesPerSide ** 2; i++) {
        let square = document.createElement('div');
        square.classList.add(`square`);
        square.style.width = square.style.height = squareSize + "px";
        square.style.backgroundColor = "purple";
        square.style.border = "1px dotted black";
        container.appendChild(square);
        square.addEventListener('mouseover', function() {
            this.style.backgroundColor = "violet";
        })
        square.addEventListener('click', function() {
            this.style.backgroundColor = "purple";
        })
        
     

    }

   
}


function runApp() {
    userChoice = prompt("Enter number of boxes:  ")
    while (userChoice > 100) {
        userChoice = prompt("Enter number of boxes: (Maximum 100)")
}
makeGrid(userChoice);
}



runApp()
