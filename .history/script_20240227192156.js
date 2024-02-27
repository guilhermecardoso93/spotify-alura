const searchInput = document.getElementById("search-input");
const resultsArtists = document.getElementById("result-artists");
const resultPlaylist = document.getElementById("result-playlists");

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    resultPlaylist.classList.add('hidden')
  }
});
