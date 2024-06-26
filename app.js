const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21.492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12.502,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15.137,
  },
];

const main = document.getElementById("main-el");

let html = "";

for (let i = 0; i < posts.length; i++) {
  html += `
  <article class="post">
    <div class="header container">
      <img class="avatar" src="${posts[i].avatar}">
      <div class="name-location">
        <div>
          <span class="name">${posts[i].name}</span>
        </div>
        <span class="location">${posts[i].location}</span>
      </div>
    </div>
    <div class="img-post container">
      <img class="img" src="${posts[i].post}"
    </div>
    <div class="control-bar container">
      <img class="icon" src="images/icon-heart.png">
      <img class="icon" src="images/icon-comment.png">
      <img class="icon" src="images/icon-dm.png">
    </div>
    <div class="container">
      <span class="likes">${posts[i].likes} likes</span>
      <p>
        <span class="username">${posts[i].username}</span>
        ${posts[i].comment}
      </p>
    </div>
  </article>
  `;
}

main.innerHTML = html;
