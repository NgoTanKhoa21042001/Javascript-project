const showModalBtn = document.querySelector(".show-modal");

const bottomSheet = document.querySelector(".bottom-sheet");

const sheetOverlay = document.querySelector(".sheet-overlay");

const sheetContent = document.querySelector(".content");

const dragIcon = document.querySelector(".drag-icon");

// only updae sheet height when mouse button is press down and then move
// Global variables for tracking drag events
let isDragging = false,
  startY,
  startHeight;
const showBottomSheet = () => {
  // when the sheet is shown, the default height of sheet is 50vh
  bottomSheet.classList.add("show");
  updateSheetHeight(50);
};

const hidewBottomSheet = () => {
  bottomSheet.classList.remove("show");
};
const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
};
// Sets initial drag position and sheetContent height
const dragStart = (e) => {
  isDragging = true;
  startY = e.pageY;
  startHeight = parseInt(sheetContent.style.height);
  bottomSheet.classList.add("dragging");
};
// set isDragging back to false if mouse up button is pressed
// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
  if (!isDragging) return;
  const deltra = startY - e.pageY;
  const newHeight = startHeight + (deltra / window.innerHeight) * 100;
  updateSheetHeight(newHeight);
};
const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
};

dragIcon.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("mousedown", dragStart);

dragIcon.addEventListener("mousemove", dragging);
showModalBtn.addEventListener("click", showBottomSheet);
sheetOverlay.addEventListener("click", hidewBottomSheet);
