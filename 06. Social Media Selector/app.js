const arrowIcon = document.querySelector("#arrowIcon");

const listItem = document.querySelector("#list");

const selectField = document.querySelector("#selectField");

selectField.addEventListener("click", () => {
  listItem.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

const selectText = document.querySelector("#selectText");

const options = document.querySelectorAll(".options");

// options.forEach((option) => {
//   option.addEventListener("click",  (e) => {
//     selectText.innerHTML = e.target.textContent;
//     listItem.classList.toggle("hide");
//     arrowIcon.classList.toggle("rotate");
//   });
// });

options.forEach((option) => {
  option.addEventListener("click", function () {
    selectText.innerHTML = this.innerText;
    listItem.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  });
});
