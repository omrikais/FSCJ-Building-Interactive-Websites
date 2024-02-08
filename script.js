// Click handler for search button
const captureSearchValue = () => {
  return document.getElementById("search-bar").value;
};

// The filterBooks() function takes in a search string and a list of books as parameters and returns all of the books that contain
// an exact match of the search input as an array of objects. Objects in this array should be formatted as books with title, author,
// and tags properties, similar to the original books array. It should use the flattenObjectValuesIntoArray() function to search all
// fields within a book object easily.
// Expected the `filterBooks` function to return an array.
const filterBooks = (searchString, bookList) => {
    return bookList.filter(book => {
        const flattenedObj = flattenObjectValuesIntoArray([book]);
        return flattenedObj[0].some(value => value.toLowerCase().startsWith(searchString.toLowerCase()));
    });
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function 
//in `helper.js`
//The structureBooksAsHtml() function takes a list of books as a parameter, iterates over the list, formats them as HTML using 
//the structureBookAsHtml() helper function, and returns an array of formatted book elements.

const structureBooksAsHtml = () => {};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {};

// Grab search button from the DOM

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});
