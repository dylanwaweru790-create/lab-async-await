// Write your code here!
// Step 2: Manipulating existing elements
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// Step 3: Book elements
const bookList = document.getElementById('book-list');

bookStore.books.forEach(book => {
  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imageUrl;

  bookContainer.append(bookTitle, bookAuthor, bookImage);
  bookList.appendChild(bookContainer);
});

// Bonus: remove the example book from the HTML
document.getElementById('delete-this').remove();


function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  for (const post of posts) {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.append(h1, p);
    postList.appendChild(li);
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  displayPosts(posts);
}

fetchPosts();