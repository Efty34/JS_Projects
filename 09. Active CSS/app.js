const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item2) => {
      item2.classList.remove("red-color");
    });

    // document.querySelector(".red-color")?.classList.remove("red-color");

    item.classList.add("red-color");
  });
});
