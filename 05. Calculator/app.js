const inputScreen = document.querySelector("#inputBox");
const buttons = document.querySelectorAll(".button");

// let calcScreen = "";
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const value = e.target.innerHTML;
//     if (value == "=") {
//       calcScreen = eval(calcScreen);
//       inputScreen.value = calcScreen;
//     } else {
//       calcScreen += e.target.innerHTML;
//       inputScreen.value = calcScreen;
//     }
//   });
// });

let calcScreen = "";
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.innerHTML;
    if (value == "=") {
      calcScreen = eval(calcScreen);
      inputScreen.value = calcScreen;
    } else if (value == "AC") {
      calcScreen = "";
      inputScreen.value = calcScreen;
    } else if (value == "DEL") {
      calcScreen = calcScreen.substring(0, calcScreen.length - 1);
      inputScreen.value = calcScreen;
    } else {
      calcScreen += this.innerHTML;
      inputScreen.value = calcScreen;
    }
  });
});
