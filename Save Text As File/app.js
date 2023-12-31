const textarea = document.querySelector("textarea");
fileNameInput = document.querySelector(".file-name input");
selectMenu = document.querySelector(".save-as select");
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
  //getting selected option file
  //   let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  //   saveBtn.innerText = `Save as ${selectedOption.split(" ")[0]} File`;

  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;

  saveBtn.innerText = `Save as ${selectedOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  // URL.createObjectUrl create a  url that present passed object
  const fileUrl = URL.createObjectURL(blob);
  console.log(blob);
  console.log(fileUrl);
  const link = document.createElement("a");
  link.download = fileNameInput.value; // passing file name as dowload value of link
  link.href = fileUrl; // passing url as href value of link
  console.log(link);
  link.click(); // clicking link so file is downloaded
});
