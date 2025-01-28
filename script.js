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

    let currentLikeStatus = getLikeStatus(indexBook);
    setLikeImg(indexBook, currentLikeStatus);
    setLikesCount(indexBook);
  }
}

function toggleLike(indexBook) {
  toggleLikeStatusJSONAndUpdateCounter(indexBook);
  let likeStatus = getLikeStatus(indexBook);
  setLikeImg(indexBook, likeStatus);
  setLikesCount(indexBook);
}

function getLikeStatus(indexBook) {
  return books[indexBook].liked;
}

function toggleLikeStatusJSONAndUpdateCounter(indexBook) {
  let currentLikeStatus = getLikeStatus(indexBook);
  if (currentLikeStatus == false) {
    books[indexBook].liked = true;
    addLike(indexBook);
  } else {
    books[indexBook].liked = false;
    subtractLike(indexBook);
  }
}

function getLikesCount(indexBook) {
  return books[indexBook].likes;
}

function addLike(indexBook) {
  let currentLikesNumber = getLikesCount(indexBook);
  let newLikesNumber = parseInt(currentLikesNumber) + 1;
  return newLikesNumber;
}

function subtractLike(indexBook) {
  let currentLikesNumber = getLikesCount(indexBook);
  let newLikesNumber = parseInt(currentLikesNumber) - 1;
  return newLikesNumber;
}

function setLikesCount(indexBook) {
  let likeCountRef = document.getElementById("like-count" + String(indexBook));
  let likeCount = getLikesCount(indexBook);
  likeCountRef.innerHTML = `${likeCount}`;
}

function setLikeImg(indexBook, likeStatus) {
  likeImgRef = document.getElementById("like-img" + String(indexBook));
  if (likeStatus == true) {
    likeImgRef.src = "./assets/img/RedHeartFilledMaterialIcons.png";
  } else {
    likeImgRef.src = "./assets/img/RedHeartEmptyMaterialIcons.png";
  }
}
