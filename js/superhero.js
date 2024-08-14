import { _env } from "./env.js";

const urlParams = new URLSearchParams(window.location.search);
const heroId = urlParams.get('id');

// Event listeners added here
document.addEventListener('DOMContentLoaded', () => {
    fetchSuperheroDetails();
});

// Function to fetch the details of a Superhero
function fetchSuperheroDetails() {
    const url = `${_env.BASEURL}/${heroId}?ts=${Date.now()}&apikey=${_env.PUBLICKEY}&hash=${_env.getHash(Date.now())}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySuperheroDetails(data.data.results[0]))
        .catch(error => console.error('Error fetching superhero details: ', error));
}

// Function to display the superhero details
function displaySuperheroDetails(hero) {
    document.getElementById('heroName').textContent = hero.name;
    const heroDetails = document.getElementById('heroDetails');
    heroDetails.classList.add('hero-details');
    heroDetails.innerHTML = `
        <div>
        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
        </div>
        <p>${hero.description}</p>
        <div>
        <h3>Comics</h3>
        <ul>${hero.comics.items.map(item => `<li>${item.name}</li>`).join('')}</ul>
        </div>
        <div>
        <h3>Series</h3>
        <ul>${hero.series.items.map(item => `<li>${item.name}</li>`).join('')}</ul>
        </div>
        <div>
        <h3>Stories</h3>
        <ul>${hero.stories.items.map(item => `<li>${item.name}</li>`).join('')}</ul>
        </div>
        <div>
        <h3>Events</h3>
        <ul>${hero.events.items.map(item => `<li>${item.name}</li>`).join('')}</ul>
        </div>
    `;
}
