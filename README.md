# Marvel Superhero Hunter
This is a simple web application that uses the **Marvel API** to display a list of superheroes. Users can search for superheroes by name, add their favorite superheroes to a persistent favorites list, and view detailed information about each superhero.

## Features
- Home Page: Displays a list of superheroes fetched from the Marvel API. Users can search for specific superheroes using a search bar.
- Search Functionality: Filters superheroes by name without making additional API calls (No need for submit button).
- Favorite Superheroes: Users can mark superheroes as favorites. The list is persistent (stored in localStorage) and remains even after the browser is closed.
- Superhero Details: Clicking on any superhero opens a detailed view of the superhero, showing their bio, image, and other information (comics, events, series, stories, etc.).
- Favorite Superheroes Page: Displays all the superheroes marked as favorites. Each superhero can be removed from the favorites list.

## Technologies Used
**HTML**: Markup for the structure of the web application.
**CSS**: Styling for the user interface.
**JavaScript**: Fetches data from the Marvel API and manages the app's functionality (search, favorites, etc.).
**Marvel API**: Used to retrieve superhero data.
**CryptoJS**: To generate the required MD5 hash for API authentication.
**localStorage**: To persist the favorite superheroes across browser sessions.

## Setup and Installation
Clone the Repository:

```bash
git clone https://github.com/yourusername/marvel-superheroes-app.git
```
Navigate to the Project Directory:
``` bash
cd marvel-superheroes-app
```
>Marvel API Keys:
You need a public and private key from Marvel's Developer portal.
Sign up at Marvel Developer Portal and create your API keys.

Configure API Keys:
Create an env.js file in the js folder and add your API keys:

```javascript 
const _env = {
    PUBLICKEY: 'your-public-key-here',
    PRIVATEKEY: 'your-private-key-here',
    BASEURL: 'https://gateway.marvel.com:443/v1/public/characters?',
    ts: Date.now(),
    getHash: function() {
        return CryptoJS.MD5(this.ts + this.PRIVATEKEY + this.PUBLICKEY).toString();
    }
};
```

Open the Application:
Simply open *index.html* in your browser to use the application.

## Usage
### Home Page:
The home page will fetch and display a list of Marvel superheroes. Use the *search bar* to filter superheroes by name without making additional API requests.

### Favorite a Superhero:
Click the *"Add to Favorites"* button next to any superhero to add them to your favorites list.

### View Superhero Details:
Click *"View Details"* on any superhero to see their bio, comics, events, series, and stories.

### View Favorites:
Click the *"Show Favorites"* button to see your list of favorite superheroes. You can also remove a superhero from this list.

## Project Structure
```bash
marvel-superheroes-app/
├── css/
│   └── styles.css         # Stylesheet for the app
├── js/
│   ├── app.js             # Main JavaScript file
│   ├── env.js             # Environment variables (API keys)
│   ├── superhero.js       # Superhero JavaScript file
│   └── favorites.js       # Favorite Superhero JavaScript file
├── media/
│   ├── favicon.png        # Favicon
│   └── image.png          # Image for NavBar 
├── index.html             # Home page
├── superhero.html         # Superhero details page
├── favorites.html         # Favorites Superhero page
└── README.md              # This readme file
```

### API Authentication
Marvel API requires three parameters for each API request:

- ts: A timestamp.
- apikey: Your public API key.
- hash: An MD5 hash of the concatenation of the timestamp, your private key, and your public key.
> This project uses CryptoJS to generate the required hash for authentication.


***Future Enhancements:***

- Pagination for the list of superheroes.
- Ability to sort superheroes by different criteria (e.g., name, popularity).
- Add additional filtering options (e.g., by comics, events, etc.).
