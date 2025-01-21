// Example data
const booksRead = [
    { 
        title: "The Poppy War", 
        author: "R.F. Kuang", 
        cover: "https://ebooks.gramedia.com/ebook-covers/49807/image_highres/ID_POP2019MTH10EPO.jpg", 
        pages: 544,
    },
    { 
        title: "The Dragon Republic", 
        author: "R.F. Kuang", 
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1604740022i/55854821.jpg", 
        pages: 675,
    },
    /*
    { 
        title: "The Burning God", 
        author: "R.F. Kuang", 
        cover: "https://gpu.id/data-gpu/images/img-book/93984/623188001.jpg", 
        pages: 640,
    },
    { 
        title: "The Chalice of the Gods", 
        author: "Rick Riordan", 
        cover: "https://dynamic.indigoimages.ca/v1/books/books/1368098177/1.jpg?width=810&maxHeight=810&quality=85", 
        pages: 288,
    },
    { 
        title: "Wrath of the Triple Goddess", 
        author: "Rick Riordan", 
        cover: "https://m.media-amazon.com/images/I/91FkwrxEvCL.jpg", 
        pages: 336,
    },
    */
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
