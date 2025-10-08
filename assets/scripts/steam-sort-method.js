//Changes the way the games on the "Steam games I own" section are sorted.

function sortMethod(sortType) {
  var steamFrame = document.getElementById("steamgames-iframe");
  steamFrame.src =
    "https://dani-backend-apis.onrender.com/website/steamgames?sort=" + sortType;
}
