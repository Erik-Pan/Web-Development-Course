const filterButtons = document.querySelectorAll(".devlog-filters button");
const searchInput = document.querySelector("#devlog-search");
const posts = document.querySelectorAll(".devlog-post");
const emptyMessage = document.querySelector("#devlog-empty");

let currentFilter = "all";
let currentSearch = "";

function renderPosts() {
    let visiblePosts = 0;

    for (const post of posts) {
        const categories = post.dataset.category.split(" ");
        const content = post.textContent.toLowerCase();

        const matchesCategory =
            currentFilter === "all" || categories.includes(currentFilter);

        const matchesSearch = content.includes(currentSearch);

        if (matchesCategory && matchesSearch) {
            post.hidden = false;
            visiblePosts++;
        } else {
            post.hidden = true;
        }
    }

    emptyMessage.hidden = visiblePosts !== 0;
}

for (const button of filterButtons) {
    button.addEventListener("click", function() {
        currentFilter = button.dataset.filter;

        for (const otherButton of filterButtons) {
            otherButton.classList.remove("selected");
            otherButton.setAttribute("aria-pressed", "false");
        }

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");

        renderPosts();
    });
}

searchInput.addEventListener("input", function() {
    currentSearch = searchInput.value.trim().toLowerCase();

    renderPosts();
});

renderPosts();