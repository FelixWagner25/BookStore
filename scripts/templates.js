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
  <div class='price-like'>
  </div>
  <br>
  <hr class='hr-book-card'>
  <br>
  <div class='book-info'>
  </div>
  <br>
  <hr class='hr-book-card'>
  <br>
  <div class='book-comments'>
  </div>
  </div>
  `;
}
