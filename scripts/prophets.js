const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error(error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthdate = document.createElement("p");
        const birthplace = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Image of ${fullName}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthdate.textContent = `Date of birth: ${prophet.birthdate}`
        birthplace.textContent = `Place of birth: ${prophet.birthplace}`

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card)
    });
}

getProphetData();
