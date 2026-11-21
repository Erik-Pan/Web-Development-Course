const translations = {
    es: {
        "home.title": "PEQUEÑOS JUEGOS, GRANDES SUEÑOS"
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");

    for (const element of elements) {
        if (!element.dataset.originalText) {
            element.dataset.originalText = element.textContent;
        }

        if (language === "es") {
            const translation = translations.es[element.dataset.i18n];

            if (translation) {
                element.textContent = translation;
            }
        } else {
            element.textContent = element.dataset.originalText;
        }
    }

    document.documentElement.lang = language;

    try {
        localStorage.setItem("ekjourney-language", language);
    } catch (error) {
    }
}

const languageButtons = document.querySelectorAll("[data-lang]");

for (const button of languageButtons) {
    button.addEventListener("click", function () {
        changeLanguage(button.dataset.lang);
    });
}

let currentLanguage = "en";

try {
    const savedLanguage = localStorage.getItem("ekjourney-language");

    if (savedLanguage === "es") {
        currentLanguage = "es";
    }
} catch (error) {
}

changeLanguage(currentLanguage);