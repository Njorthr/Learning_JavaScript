// Get input element
let filterInput = document.querySelector("#filterInput");
// add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
    // get value of input
    let filterValue = document.querySelector("#filterInput").value.toUpperCase();
    
    
    // Get names ul
    let ul = document.querySelector("#names");
    // get lis from ul
    let li = ul.querySelectorAll("li.collection-item");
    
    // loop through collection item lis
    
    for(let i = 0;i < li.length;i++) {
        let a = li[i].getElementsByTagName("a")[0].innerHTML.toUpperCase();
        
        if(a.includes(filterValue)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";            
        }

        // // if matched
        // //        if(a.innerHTML.toUpperCase().includes(filterValue)){
        // if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        // } else {
        // }
    }
}