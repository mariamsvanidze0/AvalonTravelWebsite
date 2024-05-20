function searchBooks() {
    let query = document.getElementById("inputSearch").value;
    let result = document.getElementById("result");

    if (!query) {
        result.textContent = "Please enter an author's name or a book title.";
        return;
    }

    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        if (!data.docs || data.docs.length === 0) {
            result.textContent = "No books found for this search query. Please try again with different keywords.";
            return;
        }

        let books = data.docs;
        let book = books[0];

        let title = book.title ? book.title : "Unknown Title";
        let author = book.author_name ? book.author_name.join(', ') : "Unknown Author";
        
        let links = "";
        if (book.key) {
            links = `<a href="https://openlibrary.org${book.key}" target="_blank">View Book</a>`;
        } else {
            links = "No link available";
        }

        result.innerHTML = `<strong>${title}</strong><br>
                            <strong>Author:</strong> ${author}<br>
                            <strong>Links:</strong><br> ${links}`;
    })
    .catch(error => {
        console.error('Error fetching book data:', error);
        result.textContent = "Failed to fetch book data. Please try again later.";
    });
}
