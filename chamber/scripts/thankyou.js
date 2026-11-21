const params = new URLSearchParams(window.location.search);

const fields = [
    ["first", "First Name"],
    ["last", "Last Name"],
    ["email", "Email"],
    ["phone", "Mobile Phone"],
    ["organization", "Business Name"],
    ["timestamp", "Submitted"],
];

const results = document.getElementById("results");

fields.forEach(([key, label]) => {
    let value = params.get(key) ?? "";
    if (key === "timestamp" && value) {
        value = new Date(value).toLocaleString();
    }

    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    p.append(strong, value || "—");
    results.append(p);
});
