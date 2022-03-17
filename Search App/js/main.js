import {
    setSearchFocus,
    showClearTextButton,
    clearSearchText,
    clearPushListener
} from "./searchBar.js"
import { getSearchTerm } from "./dataFunctions.js"
import { retrieveSearchResults } from "./dataFunctions.js"
import {
    deleteSearchResults,
    buildSearchResults,
    setStatsLine,
    clearStatsLine
} from "./searchResults.js"
import { } from "./searchResults.js"
document.addEventListener("readystatechange", e => {
    if (e.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // set the focus on text input
    setSearchFocus();
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", clearSearchText)
    clear.addEventListener("keydown", clearPushListener)
    const search = document.querySelector("#search");
    search.addEventListener("input", showClearTextButton);

    const form = document.querySelector("#searchBar");
    form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" function

const submitTheSearch = (e) => {
    e.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);


};