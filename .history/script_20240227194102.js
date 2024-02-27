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

function displayResult(result) {
  resultPlaylist.classList.add('hidden')
  const artistName = document.getElementById('artist-name')
  const artistImg = document.getElementById('artist-img')

  result.forEach((element) => {
    artistName.innerText = element.name;
    artistImg.src = element.urlImg
  })

}
