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
    let allBookComments = [];
    for (
      let indexComment = 0;
      indexComment < books[indexBook].comments.length;
      indexComment++
    ) {
      let commentName = books[indexBook].comments[indexComment].name;
      let commentText = books[indexBook].comments[indexComment].comment;
      allBookComments.push({ name: commentName, comment: commentText });
    }
    console.table(allBookComments);
  }
}
