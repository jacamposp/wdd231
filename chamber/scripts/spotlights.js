const spotlightsURL = 'scripts/members.json';
const container = document.querySelector('#spotlight-container');
const levels = { 2: 'Silver', 3: 'Gold' };

async function getSpotlights() {
    try {
        const response = await fetch(spotlightsURL);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data.filter((member) => member.membershipLevel > 1);
    } catch (error) {
        console.error(error);
        return [];
    }
}

function pickRandom(arr, n) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
}

async function displayRandomSpotlights() {
    const allSpotlights = await getSpotlights();
    const randomSpotlights = pickRandom(allSpotlights, 2);

    container.innerHTML = randomSpotlights
        .map(
            (m) => `
      <div class="card">
        <div class="card-header">
          <h3>${m.name}</h3>
          <p>${levels[m.membershipLevel]} Member</p>
        </div>
        <div class="card-body">
          <img src="https://placehold.co/100x100?text=Logo" alt="${m.name} logo" width="100" height="100" loading="lazy" />
          <div class="card-info">
            <p><strong>Address:</strong> ${m.address}</p>
            <p><strong>Phone:</strong> ${m.phone}</p>
            <p><strong>URL:</strong> <a href="${m.website}" target="_blank" rel="noopener">${m.website}</a></p>
          </div>
        </div>
      </div>`
        )
        .join('');
}

displayRandomSpotlights();