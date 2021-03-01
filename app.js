window.twttr = (function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };

  return t;
})(document, "script", "twitter-wjs");

const quotes = document.querySelector(".quotes");
let quote;
let author;
const twitterHref = () => {};
const getStoic = () => {
  fetch("https://stoicquotesapi.com/v1/api/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      quote = data.body;
      author = data.author;
      document.getElementById("author").innerHTML = "- " + author;
      document.getElementById("quote").innerHTML = quote;
      quotes.style.backgroundColor = "#f3f3f3";
      quotes.style.border = ".2rem #160f30 solid";
      quotes.style.boxShadow = "1rem 1rem #160f30 ";
      document.querySelector(".share").innerHTML =
        '<a href="https://twitter.com/intent/tweet?text=' +
        quote +
        "\n  -" +
        author +
        ".\n\n " +
        'Check out these stoic quotes!\n\n  https://dereakif.github.io/get-stoic/" class="twitter-share-button btn btn-dark btn-lg"  data-size="large"><i class="fa fa-twitter"></i>       Tweet</a>';
    });
};
