// Listen for form submit
document.querySelector("#myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
e.preventDefault();
const siteName = document.querySelector("#siteName").value;
const siteUrl = "https://" + document.querySelector("#siteUrl").value;

if (!validateForm(siteName, siteUrl)) {
    return false
}

const bookmark = {
    name: siteName,
    url: siteUrl
}
    if (localStorage.getItem("bookmarks") === null) {
        // init array
        const bookmarks = [];
        // add to array
        bookmarks.push(bookmark);
        // set to localstorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        // get bookmarks from localstorage
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        // add bookmark to array
        bookmarks.push(bookmark);
        // re-set back to localstorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    //clear the form
    document.querySelector("#myForm").reset();

    fetchBookmarks();
    
}

// Delete Bookmark
function deleteBookmark(url) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for(let i = 0;i < bookmarks.length;i++){
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    
    const bookmarksResults = document.querySelector("#bookmarksResults");
    bookmarksResults.innerHTML = "";
    bookmarks.forEach(i => {
        const name = i.name;
        const url = i.url;

        bookmarksResults.innerHTML += `<div class="card bg-light text-dark card-body mb-4">
        <h3>${name}</h3>
        <a class="btn btn-primary" target="_blank" href="${url}">Visit</a>
        <a onclick="deleteBookmark(\'${url}\')" class="btn btn-danger" href="#">Delete</a>
        </div>`;
    });
}

function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert("Please fill in the form");
        return false; //dont want it to keep going
    }
    
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    
    if (!siteUrl.match(regex)) {
        alert("Please use a valid URL");
        return false;
    }
    return true;
}