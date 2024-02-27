const searchInput = document.getElementById("search-input");
const resultsArtists = document.getElementById("result-artists");
const resultPlaylist = document.getElementById("result-playlists");
const url = "http://localhost:3000"

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    resultPlaylist.classList.add('hidden')
    resultsArtists.classList.remove('hidden')

    return
  }
});

function requestApi(searchTerm) {
  fetch()
}