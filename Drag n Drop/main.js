const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

// Drag Functions
function dragStart() {
    this.classList.toggle("hold");
    requestAnimationFrame(() => this.classList.toggle("invisible"), 0)
}

function dragEnd() {
    this.classList.toggle("hold");
    this.classList.toggle("invisible");
}

function dragOver(e) {
    e.preventDefault();         // in order for drop to run
    
}
function dragEnter(e) {
    e.preventDefault();  
    this.classList.toggle("hovered");
}
function dragLeave() {
    this.classList.toggle("hovered");
    
}
function dragDrop() {
    this.append(fill);
    this.classList.remove("hovered");
}