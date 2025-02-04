function init() {
  getPropertyFromLocalStorage("likeStatus", "liked");
  getPropertyFromLocalStorage("likesCount", "likes");
  getPropertyFromLocalStorage("bookComments", "comments");
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
  saveLikesCountToLocalStorage();
  saveLikeStatusToLocalStorage();
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
  books[indexBook].likes = newLikesNumber;
  return newLikesNumber;
}

function subtractLike(indexBook) {
  let currentLikesNumber = getLikesCount(indexBook);
  let newLikesNumber = parseInt(currentLikesNumber) - 1;
  books[indexBook].likes = newLikesNumber;
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

function postComment(indexBook) {
  let commentName = "UnkownUser";
  let inputTagId = String("comment-input" + indexBook);
  let commentText = document.getElementById(inputTagId).value;

  let bookCommentsTagId = String("book-comments" + indexBook);
  let bookCommentsRef = document.getElementById(bookCommentsTagId);
  bookCommentsRef.innerHTML =
    addBookCommentLine(commentName, commentText) + bookCommentsRef.innerHTML;
  addCommentToJSON(indexBook, commentName, commentText);
  saveBookCommentsToLocalStorage();
}

function saveLikeStatusToLocalStorage() {
  let currentLikeStatus = [];
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    currentLikeStatus[indexBook] = books[indexBook].liked;
  }
  localStorage.setItem("likeStatus", JSON.stringify(currentLikeStatus));
}

function saveLikesCountToLocalStorage() {
  let currentLikesCount = [];
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    currentLikesCount[indexBook] = books[indexBook].likes;
  }
  localStorage.setItem("likesCount", JSON.stringify(currentLikesCount));
}

function saveBookCommentsToLocalStorage() {
  let currentBookComments = [];
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    currentBookComments[indexBook] = books[indexBook].comments;
  }
  localStorage.setItem("bookComments", JSON.stringify(currentBookComments));
}

function addCommentToJSON(indexBook, commentName, commentText) {
  books[indexBook].comments.unshift({
    name: String(commentName),
    comment: String(commentText),
  });
}

function getPropertyFromLocalStorage(localStorageKey, booksKey) {
  let localStorageItem = localStorage.getItem(localStorageKey);
  if (localStorageItem === null) {
    return;
  } else {
    let properties = JSON.parse(localStorageItem);
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
      books[indexBook][booksKey] = properties[indexBook];
      console.table(books[indexBook][booksKey]);
    }
  }
}
