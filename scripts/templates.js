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
  <br>
  <hr class='hr-book-card'>
  <br>
  </div>
  `;
}
