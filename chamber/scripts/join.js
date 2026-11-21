document.getElementById("timestamp").value = new Date().toISOString();

document.querySelectorAll(".card-link").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.modal).showModal();
    });
});

document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest("dialog").close());
});