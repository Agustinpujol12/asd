const hiddenHeart = document.querySelector(".hidden-heart");
document.body.addEventListener("mousemove", (event) => {
  hiddenHeart.style.left = event.clientX + "px";
  hiddenHeart.style.top = event.clientY + "px";
});