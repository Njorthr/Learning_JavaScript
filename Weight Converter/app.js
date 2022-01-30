let lbsInput = document.querySelector("#lbsInput");
let gramsInput = document.querySelector("#gramsInput");
let kgInput = document.querySelector("#kgInput");
let ozInput = document.querySelector("#ozInput");
let lbsOutput = document.querySelector("#lbsOutput");
let gramsOutput = document.querySelector("#gramsOutput");
let kgOutput = document.querySelector("#kgOutput");
let ozOutput = document.querySelector("#ozOutput");
let lbsCard = document.querySelector(".lbsCard");
let gramsCard = document.querySelector(".gramsCard");
let kgCard = document.querySelector(".kgCard");
let ozCard = document.querySelector(".ozCard");
lbsInput.addEventListener("input", lbsConverter);
gramsInput.addEventListener("input", gramsConverter);
kgInput.addEventListener("input", kgConverter);
ozInput.addEventListener("input", ozConverter);
lbsCard.addEventListener("click", lbsToggler);
gramsCard.addEventListener("click", gramsToggler);
kgCard.addEventListener("click", kgToggler);
ozCard.addEventListener("click", ozToggler);

function lbsToggler() {
    lbsInput.classList.toggle("closed");
    gramsInput.classList.add("closed");
    kgInput.classList.add("closed");
    ozInput.classList.add("closed");
    lbsInput.value = "";
    gramsInput.value = "";
    kgInput.value = "";
    ozInput.value = "";
    lbsOutput.innerHTML = "";
    gramsOutput.innerHTML = "";
    kgOutput.innerHTML = "";
    ozOutput.innerHTML = "";
}
function gramsToggler() {
    gramsInput.classList.toggle("closed");
    lbsInput.classList.add("closed");
    kgInput.classList.add("closed");
    ozInput.classList.add("closed");
    lbsInput.value = "";
    gramsInput.value = "";
    kgInput.value = "";
    ozInput.value = "";
    lbsOutput.innerHTML = "";
    gramsOutput.innerHTML = "";
    kgOutput.innerHTML = "";
    ozOutput.innerHTML = "";
    
}
function kgToggler() {
    kgInput.classList.toggle("closed");
    gramsInput.classList.add("closed");
    lbsInput.classList.add("closed");
    ozInput.classList.add("closed");
    lbsInput.value = "";
    gramsInput.value = "";
    kgInput.value = "";
    ozInput.value = "";
    lbsOutput.innerHTML = "";
    gramsOutput.innerHTML = "";
    kgOutput.innerHTML = "";
    ozOutput.innerHTML = "";
}
function ozToggler() {
    ozInput.classList.toggle("closed");
    gramsInput.classList.add("closed");
    kgInput.classList.add("closed");
    lbsInput.classList.add("closed");
    lbsInput.value = "";
    gramsInput.value = "";
    kgInput.value = "";
    ozInput.value = "";
    lbsOutput.innerHTML = "";
    gramsOutput.innerHTML = "";
    kgOutput.innerHTML = "";
    ozOutput.innerHTML = "";
}

function lbsConverter(e) {
    let lbs = e.target.value;
    gramsOutput.innerHTML = lbs/0.0022046;
    kgOutput.innerHTML = lbs/2.2046;
    ozOutput.innerHTML = lbs*16;
};

function gramsConverter(e) {
    let grams = e.target.value;
    lbsOutput.innerHTML = grams*0.0022046;
    kgOutput.innerHTML = grams/1000;
    ozOutput.innerHTML = grams*0.035274;
};

function kgConverter(e) {
    let kg = e.target.value;
    lbsOutput.innerHTML = kg*2.2046;
    gramsOutput.innerHTML = kg*1000;
    ozOutput.innerHTML = kg*35.274;
};
function ozConverter(e) {
    let oz = e.target.value;
    lbsOutput.innerHTML = oz/16;
    kgOutput.innerHTML = oz/35.724;
    gramsOutput.innerHTML = oz*28.35;
};







// let lbsInput = document.querySelector("#lbsInput");
// lbsInput.addEventListener("input", function(e) {
    
//     let lbs = e.target.value;
//     document.querySelector("#gramsOutput").innerHTML = lbs/0.0022046;
//     document.querySelector("#kgOutput").innerHTML = lbs/2.2046;
//     document.querySelector("#ozOutput").innerHTML = lbs*16;
// });





  
  