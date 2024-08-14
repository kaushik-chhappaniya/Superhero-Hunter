import { _env } from "./env.js";

window.removeFromFavorites = removeFromFavorites;
// Event Listeners registered
document.addEventListener("DOMContentLoaded", () => {
   displayFavorites();
});

// Function to display the favorites
function displayFavorites() {
   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
   const favoritesList = document.getElementById("favoritesList");
   favoritesList.innerHTML = "";
   if (favorites.length === 0) {
      const noFavorites = document.createElement("div");
      noFavorites.innerHTML = `<h3> No Favorites Added</h3>`;
      noFavorites.classList.add("no-favorites");
      favoritesList.appendChild(noFavorites);
   } else {
      favorites.forEach((heroId) => {
         fetch(
            `${_env.BASEURL}/${heroId}?ts=${Date.now()}&apikey=${
               _env.PUBLICKEY
            }&hash=${_env.getHash(Date.now())}`,
         )
            .then((response) => response.json())
            .then((data) => {
                hideLoading();
               const hero = data.data.results[0];
               const heroCard = document.createElement("div");
               heroCard.classList.add("hero-card");

               heroCard.innerHTML = `
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
                    <h3>${hero.name}</h3>
                    <button class="favorites-btn" onclick="removeFromFavorites('${hero.id}')">Remove from Favorites</button>
                `;
               favoritesList.appendChild(heroCard);
            })
            .catch((error) => 
                {
                    hideLoading();
                    console.error("Error fetching favorite superhero:", error)
      });
      });
   }
}

//  Function to remove the hero from the favorites list
function removeFromFavorites(heroId) {
   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
   favorites = favorites.filter((id) => id !== heroId);
   localStorage.setItem("favorites", JSON.stringify(favorites));
   displayFavorites();
}

 // Hide loading animation
 function hideLoading() {
    document.getElementById("loading").style.display = "none";
 }
 