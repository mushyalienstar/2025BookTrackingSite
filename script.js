// Example data
const booksRead = [
    { 
        title: "The Poppy War", 
        author: "R.F. Kuang", 
        cover: "https://ebooks.gramedia.com/ebook-covers/49807/image_highres/ID_POP2019MTH10EPO.jpg", 
        pages: 544,
    },
    { 
        title: "The Poppy War", 
        author: "R.F. Kuang", 
        cover: "https://ebooks.gramedia.com/ebook-covers/49807/image_highres/ID_POP2019MTH10EPO.jpg", 
        pages: 544,
    }
];

const totalBooks = 20;

// Update progress bar
const progressBar = document.getElementById('progress-bar');
const progress = Math.min((booksRead.length / totalBooks) * 100, 100);
progressBar.style.width = progress + '%';
progressBar.textContent = `${Math.round(progress)}% (${booksRead.length}/${totalBooks} books)`;

// Display books
const bookList = document.getElementById('book-list');
booksRead.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <div class="details">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <span class="pages">${book.pages} pages</span>
        </div>
    `;
    bookList.appendChild(bookItem);
});
