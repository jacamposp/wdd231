document.getElementById("timestamp").value = new Date().toISOString();

const benefits = {
    np: ["Listing in the member directory", "Access to monthly networking events", "Chamber newsletter"],
    bronze: ["All NP benefits", "Access to basic business training", "10% discount on chamber events"],
    silver: [
        "All Bronze benefits",
        "Advanced training workshops",
        "Rotating spotlight on the home page",
        "20% discount on chamber events",
    ],
    gold: [
        "All Silver benefits",
        "Priority spotlight position on the home page",
        "Invitations to exclusive special events",
        "Featured advertising in the newsletter",
        "30% discount on chamber events",
    ],
};

Object.entries(benefits).forEach(([level, items]) => {
    const list = document.querySelector(`#modal-${level} .benefits`);
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
    });
});

document.querySelectorAll(".card-link").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.modal).showModal();
    });
});

document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest("dialog").close());
});