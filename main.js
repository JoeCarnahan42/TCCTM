const likeButton = document.getElementById("like-button");
const likeCountDisplay = document.getElementById("like-count");

let likeCount = 0;

function addLike() {
  likeCount++;
  likeCountDisplay.innerText = "Likes: " + likeCount;
  alert("Thank you for liking my post!");
}
