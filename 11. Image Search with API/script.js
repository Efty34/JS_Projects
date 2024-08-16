const accessKey = "Iw2CmcaZL4ruP-mjRR7n3l0pcAHIYHNWr5IMDFTfKYo";

const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more-button");

let inputData = "";
let page = 1;


const searchImages = async () => {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const { results } = data;

    if (page === 1) {
      searchResults.innerHTML = "";
    }

    results.forEach((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");

      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResults.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
      showMore.style.display = "block";
    }
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  page = 1;

  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
});
