const data = new URLSearchParams(window.location.search);

const first = data.get('first');
const last = data.get('first');
const phone = data.get('phone');
const date = data.get('date');
const email = data.get('email');
const ordinance = data.get('ordinance');
const temple = data.get('location');


const container = document.querySelector("#results");


document.querySelector('#results').innerHTML =
    `<p>Appointment for ${first} ${last}</p>
<p>Proxy ${ordinance} on ${date} in the ${temple} Temple</p>
<p>Your phone: ${phone}</p>
<p>Your email: ${email}</p>`





