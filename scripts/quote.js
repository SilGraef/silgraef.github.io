const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "— Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "— Theodore Roosevelt"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "— Thomas Edison"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "— Confucius"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "— Winston Churchill"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "— Socrates"
  }
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});