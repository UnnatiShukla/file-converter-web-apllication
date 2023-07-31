// Define an array of quotes
var quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quotes[randomIndex];
  }
  
  // Add event listener to the button
  var generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generateQuote);
  
  // Generate initial quote
  generateQuote();
  