const body = document.querySelector("body");
const themeR = document.querySelector(".themer");
const followBtns = document.querySelectorAll(".follow-button");

// HuXn
// followBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     this.classList.toggle("followed");
//     if (this.innerText == "Follow") {
//       this.innerText = "Unfollow";
//     } else {
//       this.innerText = "Follow";
//     }
//   });
// });
followBtns.forEach((btn) => {
  btn.addEventListener("click", function(){
    followAction(this);
  });
});

function followAction(indBtn) {
    indBtn.classList.toggle("followed");
  if (indBtn.innerText == "Follow") {
    indBtn.innerText = "Unfollow";
  } else {
    indBtn.innerText = "Follow";
  }
}

//  --------> Mine
// toggleTheme = () => {
//   body.classList.toggle("light-theme");
//   body.classList.toggle("dark-theme");

//   if (body.classList.contains("dark-theme")) {
//     themeR.innerText = "Dark";
//   } else {
//     themeR.innerText = "Light";
//   }
// };


// --------> HuXn
// followBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     followAction(e.target);
//   });
// });
// ----------> HuXn
// function followAction(button) {
//   button.classList.toggle("followed");
//   if (button.innerText == "Follow") {
//     button.innerText = "Unfollow";
//   } else {
//     button.innerText = "Follow";
//   }
// }

themeR.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    themeR.innerText = "Light";
  } else {
    body.className = "light-theme";
    themeR.innerText = "Dark";
  }
}
