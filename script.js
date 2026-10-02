
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Update active filter button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        // Filter tour packages
        cards.forEach(card => {
            if (
                category === "All" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Show tour package details
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {
    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = button.dataset.price;
        const duration = button.dataset.duration;
        const location = button.dataset.location;

        alert(
            "Tour Package: " + name +
            "\nLocation: " + location +
            "\nDuration: " + duration +
            "\nPrice: " + price +
            " per person"
        );
    });
});