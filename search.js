// ======================================
// LIVE SEARCH SYSTEM
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("serviceSearch");
    const serviceCards = document.querySelectorAll(".service-card");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        let visible = 0;

        serviceCards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            if (
                title.includes(keyword) ||
                description.includes(keyword)
            ) {
                card.style.display = "block";
                visible++;
            } else {
                card.style.display = "none";
            }

        });

        let empty = document.getElementById("noResults");

        if (!empty) {

            empty = document.createElement("div");

            empty.id = "noResults";

            empty.style.textAlign = "center";
            empty.style.marginTop = "40px";
            empty.style.fontSize = "20px";
            empty.style.color = "#666";

            document.querySelector(".service-grid").appendChild(empty);

        }

        if (visible === 0) {
            empty.innerHTML = "❌ No matching services found.";
        } else {
            empty.innerHTML = "";
        }

    });

});