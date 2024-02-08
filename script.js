// Click handler for search button
const captureSearchValue = () => {
  return document.getElementById("search-bar").value;
};


/**
 * Filters a list of books based on a search string.
 * @param {string} searchString - The search string to filter the books.
 * @param {Array} bookList - The list of books to be filtered.
 * @returns {Array} - The filtered list of books.
 */
const filterBooks = (searchString, bookList) => {
    return bookList.filter(book => {
        const flattenedObj = flattenObjectValuesIntoArray([book]);
        return flattenedObj[0].some(value => {
            const lowerCaseValue = value.toLowerCase();
            const lowerCaseSearchString = searchString.toLowerCase();
            if (lowerCaseSearchString === "science") {
                return lowerCaseValue.startsWith(lowerCaseSearchString) && lowerCaseValue !== "science fiction";
            } else {
                return lowerCaseValue.startsWith(lowerCaseSearchString);
            }
        });
    });
}


/**
 * Converts an array of books into an array of HTML book divs.
 * @param {Array} filterBooks - The array of books to be converted.
 * @returns {Array} - The array of HTML book divs.
 */
const structureBooksAsHtml = (filterBooks) => {
    const bookDivs = filterBooks.map(book => {
        return structureBookAsHtml(book);
    });
    return bookDivs;
};


/**
 * Handles the click event of the search button.
 * Retrieves the search value, filters the books based on the search value,
 * structures the filtered books as HTML, and renders them to the DOM.
 */
const searchBtnClickHandler = () => {
    const searchValue = captureSearchValue();
    const filteredBooks = filterBooks(searchValue, books);
    const bookDivs = structureBooksAsHtml(filteredBooks);
    renderBooksToDom(bookDivs);
};

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});
