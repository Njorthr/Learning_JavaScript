const grid = document.querySelector(".grid");
let width = 10;
let squares = []
let bombAmount = 20
let flags = 0
let isGameOver = false;
let matches = 0;
const startBtn = document.querySelector("#start-btn"),
    restartBtn = document.querySelector("#restart");
let result = document.querySelector(".result");



startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    createBoard()
})

restartBtn.addEventListener("click", () => {
    flags = 0;
    squares = []
    matches = 0;
    console.log(matches);
    isGameOver = false;
    restartBtn.style.display = "none";
    grid.innerHTML = null;
    result.innerHTML = "";
    checkForWin()
    createBoard()
})





// Create Board

function createBoard() {

    // get shuffled game array withc random bombs
    const bombsArray = Array(bombAmount).fill("bomb")        // making an array of 20 indexes and using fill to fill each with "bomb"
    const emptyArray = Array(width * width - bombAmount).fill("valid")
    // join 2 arrays
    const gameArray = emptyArray.concat(bombsArray)
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5)  //shuffling



    for (let i = 0; i < width * width; i++) {
        const square = document.createElement("div")
        square.setAttribute("id", i)
        square.setAttribute("class", "playBox")
        square.classList.add(shuffledArray[i])
        grid.appendChild(square)
        squares.push(square)
        const innerSquare = document.createElement("div")
        innerSquare.setAttribute("class", innerSquare)

        // normal click
        square.addEventListener("click", function (e) {
            click(square)
        })

        // right click
        square.oncontextmenu = function (e) {
            e.preventDefault()
            addFlag(square)
        }
    }


    // add numbers
    for (let i = 0; i < squares.length; i++) {
        let total = 0;
        // filter out edges
        const isLeftEdge = (i % width === 0)
        const isRightEdge = (i % width === width - 1)

        if (squares[i].classList.contains("valid")) {
            // checking left
            if (!isLeftEdge && squares[i - 1].classList.contains("bomb")) {
                total++
            }
            // checking right 
            if (!isRightEdge && squares[i + 1].classList.contains("bomb")) {
                total++
            }
            // checking north
            if (i > 9 && squares[i - width].classList.contains("bomb")) {
                total++
            }
            // checking south 
            if (i < 90 && squares[i + width].classList.contains("bomb")) {
                total++
            }
            // checking northWest
            if (i > 10 && !isLeftEdge && squares[i - width - 1].classList.contains("bomb")) {
                total++
            }
            // checking northEast
            if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains("bomb")) {
                total++
            }
            // checking southWest
            if (i < 90 && !isLeftEdge && squares[i + width - 1].classList.contains("bomb")) {
                total++
            }
            // checking southEast
            if (i < 90 && !isRightEdge && squares[i + width + 1].classList.contains("bomb")) {
                total++
            }
            squares[i].setAttribute("data", total)

        }

    }
}





// add flag with right click
function addFlag(square) {
    if (isGameOver) {
        return
    }
    if (!square.classList.contains("checked") && (flags <= bombAmount)) {

        if (!square.classList.contains("flag") && flags < bombAmount) {
            square.classList.add("flag")
            square.innerHTML = "????"
            flags++
            checkForWin()
        } else if (square.classList.contains("flag")) {
            square.classList.remove("flag")
            square.innerHTML = ""
            flags--
        }


    }
}


// click on square actions

function click(square) {
    let currentId = square.id
    if (isGameOver) {

        return
    }
    if (square.classList.contains("checked") || square.classList.contains("flag")) {
        return
    }
    if (square.classList.contains("bomb")) {
        gameOver(square)
    } else {
        let total = square.getAttribute("data")
        if (total != 0) {
            square.classList.add("checked")
            square.innerHTML = total
            return
        }
        // you have to define current id here
        // and pass it as an argument to use it in another function
        checkSquare(square, currentId)
        square.classList.add("checked")
    }
}

// check neighbor squares

function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % width === 0)
    const isRightEdge = (currentId % width === width - 1)

    setTimeout(() => {
        if (!isLeftEdge) {
            // get the id of left neighbor
            const newId = squares[parseInt(currentId) - 1].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (!isRightEdge) {
            // get the id of right neighbor
            const newId = squares[parseInt(currentId) + 1].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (currentId > 9) {
            // checking north
            const newId = squares[parseInt(currentId) - width].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (currentId > 10 && !isLeftEdge) {
            // checking northWest
            const newId = squares[parseInt(currentId) - 1 - width].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (currentId > 9 && !isRightEdge) {
            // northEast neighbor
            const newId = squares[parseInt(currentId) + 1 - width].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (currentId < 90) {
            // checking south
            const newId = squares[parseInt(currentId) + width].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (currentId < 90 && !isLeftEdge) {
            // checking southWest
            const newId = squares[parseInt(currentId) - 1 + width].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }
        if (currentId < 90 && !isRightEdge) {
            // checking southEast
            const newId = squares[parseInt(currentId) + 1 + width].id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }

    }, 10)
}

function gameOver(square) {
    isGameOver = true;
    checkForWin()
    // Show all the bombs
    squares.forEach(square => {
        if (square.classList.contains("bomb")) {
            square.innerHTML = "????"
        }
    })

}

// check for win
function checkForWin() {
    matches = 0;

    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains("flag") && squares[i].classList.contains("bomb")) {
            matches++
            console.log(matches);
        }
        if (matches === bombAmount) {
            isGameOver = true;
        }
    }
    if (isGameOver) {
        if (matches === bombAmount) {
            result.innerHTML += `Congrats! You Win! <br>`
        }
        restartBtn.style.display = "block";
        result.innerHTML += `Your score is : ${matches}`
        console.log(matches);
    }
}

