var img = document.querySelector("img"),
  [previous, next, slideBtn, stop] = document.querySelectorAll("button"),
  currentIndex = (minIndex = 1),
  maxIndex = 6,
  slideShow;

function changeImage(i) {
  var newIndex = i ? currentIndex + i : currentIndex;

  if (newIndex < minIndex) {
    newIndex = maxIndex;
  } else if (newIndex > maxIndex) {
    newIndex = minIndex;
  }
  console.log(`new index= ${newIndex}`);
  // //change image source
  img.setAttribute("src", `./images/${newIndex}.jpg`);
  // //update index
  currentIndex = i ? newIndex : ++newIndex;
}

function startSlideShow() {
  slideShow = setInterval(changeImage, 1000);
}

function stopSlideShow() {
  clearInterval(slideShow);
  currentIndex--;
}
