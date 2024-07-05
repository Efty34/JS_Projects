// ratings, ratingsContainer, sendBtn, Newpanel
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

// console.log(ratings);
// console.log(ratingsContainer);
// console.log(sendBtn);
// console.log(panel);

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">❤️</p>
    <strong>Thank You!!!</strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    `;
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
