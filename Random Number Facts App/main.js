// Variables
let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");
// Events
numberInput.addEventListener("input", getFactFetch);


// // Using Ajax
// function getFactAjax() {
//     let number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", `http://numbersapi.com/${number}`);

//     xhr.onload = function () {
//         if (this.status == 200 && number != "") {
//             fact.style.display = "block";
//             factText.innerText = this.responseText;
//         }
//     }

//     xhr.send();
// }

// Using Fetch

function getFactFetch() {
    let number = numberInput.value;
    console.log(number);
    if(number != "") {
        fetch(`http://numbersapi.com/${number}`)
        .then(res => res.text())
        .then(data => {
                fact.style.display = "block";
                factText.innerText = data;
        })
    }else if(number == "") {
        fact.style.display = "none";
        factText.innerText = "";
    }
    
}