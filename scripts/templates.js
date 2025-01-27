function getBookTemplate(indexObject) {
  return `
  <div class='book-card'>
  <div class='book-card-title'> 
  <b>${books[indexObject].name}</b>
  </div>
  <hr class='hr-book-card'>
  <br>
  <img src='../assets/img/iconmonstr-book-2-240.png' class='center book-card-img'>
  <br>
  <hr class='hr-book-card'>
  <br>
  <div class='price-like book-card-pd-lr'>
  <b class='color-red'>${books[indexObject].price} EUR</b>
  <div class='heart-counter'>
  ${books[indexObject].likes}
  <img class='like-img' src="../assets/img/RedHeartEmpty_MaterialIcons.png">
  </div>
  </div>
  <br>
  <div class='book-info book-card-pd-lr'>
  <b>Author</b>:
  <span>${books[indexObject].author}</span>
  <b>Erscheinungsjahr</b>:
  <span>${books[indexObject].publishedYear}</span>
  <b>Genre</b>:
  <span>${books[indexObject].genre}</span>
  </div>
  <br>
  <hr class='hr-book-card'>
  <br>
  <b class='book-card-pd-lr'>Kommentare:</b>
  <br>
  <div class='book-comments book-card-pd-lr'>
  </div>
  </div>
  `;
}

function getBookComments(indexObject) {
  let allBookComments = [];
  for (
    let indexComment = 0;
    indexComment < books[indexObject].comments.length;
    indexComment++
  ) {
    let commentName = books[indexObject].comments[indexComment].name;
    let commentText = books[indexObject].comments[indexComment].comment;
    allBookComments.push({ name: commentName, comment: commentText });
  }
  return console.table(allBookComments);
}
