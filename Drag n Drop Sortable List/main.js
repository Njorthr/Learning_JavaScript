const draggableList = document.querySelector("#draggable-list"),
    check = document.querySelector("#check");

const richestPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Waren Buffet",
    "Bernard Arnault",
    "Carlos Slim Helu",
    "Amancio Ortega",
    "Larry Ellison",
    "Mark Zuckerberg",
    "Micheal Bloomberg",
    "Larry Page"
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

function createList() {
    [...richestPeople]  // spread operator makes a copy of given object
        .map(a => ({ value: a, sort: Math.random() }))  // changed the array into an object with value and sort properties
        .sort((a, b) => a.sort - b.sort)                // sorted the new array in random way
        .map(a => a.value)                              // changed the new random object into array 
        .forEach((person, index) => {

            const listItem = document.createElement("li");


            listItem.setAttribute("data-index", index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class ="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
            `;

            listItems.push(listItem);

            draggableList.appendChild(listItem)
        });

    addEventListeners();
}


// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

function dragStart() {
    // console.log("Event", "Dragstart");
    dragStartIndex = +this.closest("li").getAttribute("data-index");

}

function dragEnter() {
    // console.log("Event", "Dragsenter");
    this.classList.add("over")


}

function dragLeave() {
    // console.log("Event", "DragLeave");
    this.classList.remove("over")

}

function dragOver(e) {
    // console.log("Event", "DragOver");
    e.preventDefault();     // if this absent function drag wont work

}

function dragDrop() {
    // console.log("Event", "Dragdrop");
    const dragEndIndex = +this.getAttribute("data-index");
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove("over");
}
// swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {

    const itemOne = listItems[fromIndex].querySelector(".draggable");
    const itemSecond = listItems[toIndex].querySelector(".draggable");
    listItems[fromIndex].appendChild(itemSecond);
    listItems[toIndex].appendChild(itemOne);
}
// check the order of list items
function checkOrder() {
    listItems.forEach((listItem, index) => {
        const personName = listItem.querySelector(".draggable").innerText.trim();

        if (personName !== richestPeople[index]) {
            listItem.classList.add("wrong");
        } else {
            listItem.classList.remove("wrong")
            listItem.classList.add("right")
        }
    });
}


function addEventListeners() {
    const draggables = document.querySelectorAll(".draggable")
    const draggableListItems = document.querySelectorAll(".draggable-list li")

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
    })

    draggableListItems.forEach(item => {
        item.addEventListener("dragover", dragOver);
        item.addEventListener("drop", dragDrop);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    })
}

check.addEventListener("click", checkOrder);


