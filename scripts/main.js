const reviews = document.querySelectorAll(".review");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentReview = 0;

function showReview(index) {

    reviews.forEach(review => {
        review.classList.remove("active");
    });

    reviews[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);
});

prevBtn.addEventListener("click", () => {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview(currentReview);
});

setInterval(() => {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

}, 5000);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".card, .service, .tariff, .news-card, .review"
);

hiddenElements.forEach(el => {
    observer.observe(el);
});

const checkButton = document.querySelector(".coverage .btn-green");
const addressInput = document.querySelector(".coverage input");

if (checkButton) {

    checkButton.addEventListener("click", () => {

        const address = addressInput.value.trim();

        if (address === "") {

            alert("Введите адрес");

        } else {

            alert(
                "Проверка покрытия по адресу:\n" +
                address +
                "\n\nСервис находится в разработке."
            );

        }

    });

}

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".menu")
            .classList.remove("active");

    });

});

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

console.log("AstSystems успешно загружен");