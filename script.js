function init() {
  loadBooks();
}

function loadBooks() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    contentRef.innerHTML += getBookTemplate(indexBook);

    let bookCommentRefId = String("book-comments" + indexBook);
    let bookCommentRef = document.getElementById(bookCommentRefId);
    bookCommentRef.innerHTML = "";

    for (
      let indexComment = 0;
      indexComment < books[indexBook].comments.length;
      indexComment++
    ) {
      bookCommentRef.innerHTML += getBookCommentLineTemplate(
        indexBook,
        indexComment
      );
    }
  }
}

function toogleLike() {}

function getLikeStatus(indexBook) {
  return books[indexBook].liked;
}

function getLikesCount(indexBook) {
  return books[indexBook].likes;
}

function toolgeLikeImg(indexBook) {}
