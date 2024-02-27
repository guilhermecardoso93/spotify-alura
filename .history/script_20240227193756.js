const searchInput = document.getElementById("search-input");
const resultsArtists = document.getElementById("result-artists");
const resultPlaylist = document.getElementById("result-playlists");

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultsArtists.classList.remove("hidden");

    return;

    requestApi(searchTerm);
  }
});

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artirts?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResult(result));
}

function displayResult() {
  resultPlaylist.classList.add('hidden')
}
