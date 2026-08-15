// Array list of popular movies
const movies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "Pulp Fiction",
    "Spirited Away",
    "The Matrix",
    "Parasite",
    "Whiplash",
    "Spider-Man: Into the Spider-Verse",
    "Gladiator",
    "Everything Everywhere All at Once",
    "The Shawshank Redemption"
];

const movieDisplay = document.getElementById("movie-display");
const spinBtn = document.getElementById("spin-btn");

// Function to choose a random item from the array
function pickRandomMovie() {
    // Basic loading effect animation
    movieDisplay.innerText = "Choosing... 🎲";
    movieDisplay.style.borderColor = "#ffa502";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const selectedMovie = movies[randomIndex];
        
        movieDisplay.innerText = selectedMovie;
        movieDisplay.style.borderColor = "#2ed573"; 
    }, 400); // 400ms delay for visual effect
}

// Add event listener to trigger the function on click
spinBtn.addEventListener("click", pickRandomMovie);
