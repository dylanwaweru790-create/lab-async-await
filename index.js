// Write your code here!
function displayPost(post) {
    const postList = document.getElementById('post-list');

    post.forEach(post => {
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.content;

        li.append(h1, p);
        postList.appendChild(li);
    });
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => displayPost(posts));

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
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();