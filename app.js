const quotes = document.querySelector(".quotes");
const getStoic = () => {
  fetch("https://stoicquotesapi.com/v1/api/quotes/random")
    .then((response) => response.json())
    .then(
      (data) => (
        (document.getElementById("author").innerHTML = "- " + data.author),
        (document.getElementById("quote").innerHTML = data.body),
        (quotes.style.backgroundColor = "#f3f3f3"),
        (quotes.style.border = ".2rem #160f30 solid"),
        (quotes.style.boxShadow = "1rem 1rem #160f30 ")
      )
    );
};
