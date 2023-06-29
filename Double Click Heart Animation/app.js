const image = document.querySelector(".container");
heartIcon = document.querySelector(".heart");
// Add a db click to heart Icon

image.addEventListener("dblclick", (e) => {
  // Caculate the x and y position of the db click event
  let xValue = e.clientX - e.target.offsetLeft;
  let yValue = e.clientY - e.target.offsetTop;
  console.log(xValue, yValue);
  heartIcon.style.left = `${xValue}px`;
  heartIcon.style.top = `${yValue}px`;
  console.log(e);
  heartIcon.classList.add("active");
  // remove the class after 1 s
  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
});
