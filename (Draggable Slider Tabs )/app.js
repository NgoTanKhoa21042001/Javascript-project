const tabsBox = document.querySelector(".tabs-box");
arrowIcons = document.querySelectorAll(".icon ion-icon ");

let isDragging = false;
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    //if click left, reduce 350 from tabsbox scrollLeft
    // tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
  });
});
const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};
// sự kiện mousedown() xảy ra khi người dùng "nhấp" chuột vào một phần tử
tabsBox.addEventListener("mousedown", () => (isDragging = true));

tabsBox.addEventListener("mousemove", dragging);
// change dragging is false after the mouse btn is released. So the tab stop sliding
document.addEventListener("mouseup", dragStop);
