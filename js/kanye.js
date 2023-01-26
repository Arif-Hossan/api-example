let loadQuote = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};
let displayQuote = (quote) => {
  let blockQuote = document.getElementById("blockquote");
  blockQuote.innerText = `'${quote.quote}'`;

  };
loadQuote();
