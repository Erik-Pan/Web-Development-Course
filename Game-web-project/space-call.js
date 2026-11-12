const gallery = document.querySelector(".space-call-gallery-grid");
const previousButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".gallery-lightbox img");
const closeButton = document.querySelector(".gallery-lightbox-close");
nextButton.addEventListener("click", function () {
    const screenshotWidth = gallery.querySelector("img").getBoundingClientRect().width;

    gallery.scrollBy({
        left: screenshotWidth + 20,
        behavior: "smooth"
    });
});

previousButton.addEventListener("click", function () {
    const screenshotWidth = gallery.querySelector("img").getBoundingClientRect().width;

    gallery.scrollBy({
        left: -(screenshotWidth + 20),
        behavior: "smooth"
    });
});

const screenshots = gallery.querySelectorAll("img");
screenshots.forEach(function (screenshot) {
    screenshot.addEventListener("click", function () {
        lightboxImage.src = screenshot.src;
        lightboxImage.alt = screenshot.alt;
        lightbox.showModal();
    });
});

closeButton.addEventListener("click", function () {
    lightbox.close();
});

const lightboxPrevButton = document.querySelector(".gallery-lightbox-prev");
const lightboxNextButton = document.querySelector(".gallery-lightbox-next");
function changeLightboxScreenshot(direction) {
    const currentIndex = Array.from(screenshots).findIndex(function (screenshot) {
        return screenshot.src === lightboxImage.src;
    });
    const newIndex = currentIndex + direction;
    if (newIndex < 0 || newIndex >= screenshots.length) {
        return;
    }
    lightboxImage.src = screenshots[newIndex].src;
    lightboxImage.alt = screenshots[newIndex].alt;
}

lightboxNextButton.addEventListener("click", function () {
    changeLightboxScreenshot(1);
});

lightboxPrevButton.addEventListener("click", function () {
    changeLightboxScreenshot(-1);
});