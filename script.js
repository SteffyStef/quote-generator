const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown",
  },
];

function generateQuote() {
  const quoteDisplay = document.getElementById("quote");
  const authorDisplay = document.getElementById("author");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Fade out
  quoteDisplay.classList.remove("fade");
  authorDisplay.classList.remove("fade");
  void quoteDisplay.offsetWidth; // force reflow to reset animation
  void authorDisplay.offsetWidth;

  quoteDisplay.textContent = `"${selectedQuote.text}"`;
  authorDisplay.textContent = `– ${selectedQuote.author}`;

  // Fade in
  quoteDisplay.classList.add("fade");
  authorDisplay.classList.add("fade");
}
document.getElementById("copy-quote").addEventListener("click", () => {
  const quoteText = document.getElementById("quote").textContent;
  const authorText = document.getElementById("author").textContent;
  const fullQuote = `${quoteText} ${authorText}`;
  navigator.clipboard
    .writeText(fullQuote)
    .then(() => alert("Quote copied to clipboard!"))
    .catch((err) => console.error("Error copying quote:", err));
});

function getGreeting(name) {
  return `Hello, ${name}!`;
}

module.exports = { getGreeting };
