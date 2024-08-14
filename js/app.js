import { _env } from "./env.js";
var heroesData;
window.addToFavorites = addToFavorites;
window.viewDetails = viewDetails;

// All event listeners are registered
document.addEventListener("DOMContentLoaded", () => {
   fetchSuperheroes();
   // displaySuperheroes(data.data.results);

   document.getElementById("searchBar").addEventListener("input", (e) => {
      const searchQuery = e.target.value.toLowerCase();
      const filteredHeroes = heroesData.filter((hero) =>
         hero.name.toLowerCase().includes(searchQuery),
      );
      displaySuperheroes(filteredHeroes);
   });
});

//  Function for fetching superheroes list from the API server
function fetchSuperheroes() {
   const url = `${_env.BASEURL}?ts=${Date.now()}&apikey=${_env.PUBLICKEY}&hash=${_env.getHash(
      Date.now(),
   )}`;
   console.log("url :", url);

   console.log(" In the fetch Superheros :");
   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         heroesData = data.data.results;
         displaySuperheroes(data.data.results);
         hideLoading();
      })
      .catch((error) => {
         console.error("Error fetching superheroes:", error);
         hideLoading();
      });
}

//  Function to display the superheros details
function displaySuperheroes(heroes) {
   const heroList = document.getElementById("heroList");
   heroList.innerHTML = "";

   heroes.forEach((hero) => {
      const heroCard = document.createElement("div");
      heroCard.classList.add("hero-card");

      heroCard.innerHTML = `
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
            <h3>${hero.name}</h3>
            <button class="favorites-btn" onclick="addToFavorites('${hero.id}')">Add to Favorites</button>
            <button class="details-btn" onclick="viewDetails('${hero.id}')">View Details</button>
        `;
      heroList.appendChild(heroCard);
   });
}

//  Function to add superheros to favourites
function addToFavorites(heroId) {
   alert("Added to favorites 😉😉");
   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
   if (!favorites.includes(heroId)) {
      favorites.push(heroId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
   }
}

// Function to view the detail of a particular superhero
function viewDetails(heroId) {
   window.location.href = `superhero.html?id=${heroId}`;
}

// Hide loading animation
function hideLoading() {
   document.getElementById("loading").style.display = "none";
}
