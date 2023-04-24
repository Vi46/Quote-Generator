const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    }
  ];

  const quoteContainer = document.getElementById("quote-container");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const newQuoteBtn =document.getElementById("new-quote");
  
  function getRandomQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    console.log(randomIndex);
    return quotes[randomIndex];
  }
  
  function displayQuote(){
    const quote = getRandomQuote();
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = "~"+quote.author;
  }
  
  newQuoteBtn.addEventListener("click",displayQuote);
  displayQuote();
  

