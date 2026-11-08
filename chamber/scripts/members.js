const url = "scripts/members.json";
const membersContainer = document.querySelector("#cards");
const template = document.querySelector("#card-template");

const levelContainers = {
    3: document.querySelector("#gold .members"),
    2: document.querySelector("#silver .members"),
    1: document.querySelector("#member .members"),
};

async function getMembersData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error(error);
    }
}

function displayMembers(members) {
    members.forEach((member) => {
        const card = template.content.cloneNode(true);

        card.querySelector("h3").textContent = member.name;
        card.querySelector(".industry").textContent = member.industry;
        card.querySelector("img").alt = `${member.name} logo`;
        card.querySelector(".address").textContent = member.address;
        card.querySelector(".phone").textContent = member.phone;

        const link = card.querySelector(".website");
        link.href = member.website;
        link.textContent = member.website.replace("https://www.", "");

        levelContainers[member.membershipLevel]?.appendChild(card);
    });
}

const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");

gridBtn.addEventListener("click", () => {
    membersContainer.classList.replace("list", "grid");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.replace("grid", "list");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

getMembersData();