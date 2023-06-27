const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");
const generatePalette = () => {
  // chuyển đổi số đã được làm tròn thành một chuỗi hex. Tham số 16 cho biết rằng chúng ta muốn chuyển đổi số sang hệ cơ số 16 (hexadecimal).
  // clearing the container
  container.innerHTML = "";
  const maxPaletteBoxes = 32;
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    // gán dấu #
    randomHex = `#${randomHex.padStart(6, "0")}`;
    // creating a new 'li' element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="rect-box" style="background: ${randomHex}"></div>
          <span class="hex-value">${randomHex}</span>`;

    // adding click events to current li element to copy the color
    color.addEventListener("click", () => copyColor(color, randomHex));
    // thêm element vào class container
    container.appendChild(color);
  }
};

generatePalette();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");
  // console.log(colorElement);
  navigator.clipboard?.writeText &&
    navigator.clipboard.writeText(hexVal).then(() => {
      colorElement.innerText = "Copied";
      // get back to hex value after 1s
      setTimeout(() => {
        colorElement.innerText = hexVal;
      }, 1000);
    });
};

refreshBtn.addEventListener("click", generatePalette);
