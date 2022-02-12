import reddit from "./redditapi.js";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

// Events
searchForm.addEventListener("submit", e => {
    e.preventDefault();
    // Get search term
    const searchTerm = searchInput.value;
    // Get sort
    const sortBy = document.querySelector("input[name='sortby']:checked").value;
    // Get limit
    const searchLimit = document.querySelector("#limit").value;
    
    // Check input 
    if (searchTerm === "") {
        // Show message
        showMessage("Please add a search term", "alert-danger position-absolute end-0 top-0")
    }
    //  Clear input
    searchInput.value = "";

    // Search reddit
    reddit.search(searchTerm, searchLimit, sortBy)
    .then(results => {
        let output = `<div class="card-columns">`
        // Loop through posts
        results.forEach(post => {
        // Check for image 
        const image = post.preview ? post.preview.images[0].source.url : "https://accfarm.com/storage/app/media/shjfte9pyxo31.png?v=1";

            output += `
            <div class="card mb-2">
      <img class="card-img-top" src="${image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${truncateString(post.selftext, 100)}</p>
        <a href="${post.url}" target="_blank
        " class="btn btn-primary">Read More</a>
        <hr>
        <span class="badge secondary">Subreddit: ${post.subreddit}</span> 
        <span class="badge badge-dark">Score: ${post.score}</span>
      </div>
    </div>
            `;
        });
        output += "</div>";
        document.querySelector("#results").innerHTML = output;
    })
});

// Show message
function showMessage(message, className) {
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const searchContainer = document.querySelector("#search-container");
    // Get search
    const search = document.querySelector("#search");
    // Insert the meesage
    searchContainer.insertBefore(div, search);

    // Timeout alert
    setTimeout(() => {
        document.querySelector(".alert").remove()
    }, 3000);
}

// Truncate text
function truncateString(text, limit) {
    const shortened = text.indexOf(" ", limit);
    if (shortened == -1) {
        return text
    }
    return text.substring(0, shortened);
}