const url = "scripts/members.json"
const membersContainer = document.querySelector("#cards");

async function getMembersData() {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json();
        displayMembers(data);
    }
    catch (error) {
        console.log(error)
    }
}

function displayMembers(members) {
    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("card")

        card.innerHTML = `
      <div class="card-header">
        <h2>${member.name}</h2>
        <p>${member.industry}</p>
      </div>
      <div class="card-body">
       <img src="https://placehold.co/100x100?text=Logo" alt="${member.name} logo" width="100" height="100" loading="lazy" />
        <div class="card-info">
          <p><strong>ADDRESS:</strong> ${member.address}</p>
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>URL:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website.replace("https://www.", "")}</a></p>
        </div>
      </div>
    `;

        membersContainer.appendChild(card)
    })
}

const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

getMembersData();