const quotes = [
    { text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', author: 'Nelson Mandela' },
    { text: '"The purpose of our lives is to be happy."', author: 'Dalai Lama' },
    { text: '"Life is what happens when you’re busy making other plans."', author: 'John Lennon' },
    { text: '"Get busy living or get busy dying."', author: 'Stephen King' },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
    { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "You can’t go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream it. Believe it. Build it.", author: "Unknown" },
    { text: "To be the best, you must be able to handle the worst.", author: "Wilson Kanadi" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },


];

let currentIndex = 0;

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const nextQuoteButton = document.getElementById('next-quote');
const quoteBox = document.querySelector('.quote-box');

function updateShareLinks() {
    const quoteText = encodeURIComponent(quoteElement.textContent);
    const authorText = encodeURIComponent(authorElement.textContent);
    const encodedURL = encodeURIComponent(window.location.href);

    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${quoteText} ${authorText} %20${encodedURL}`;
    document.getElementById('share-telegram').href = `https://t.me/share/url?url=${encodedURL}&text=${quoteText} ${authorText}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${quoteText} ${authorText}`;
    // Instagram sharing is not supported directly via URL, so it's omitted.
}

function displayQuote() {
    const quote = quotes[currentIndex];
    quoteElement.textContent = quote.text;
    authorElement.textContent = `- ${quote.author}`;

    // Trigger the animation
    quoteBox.classList.remove('show');
    void quoteBox.offsetWidth; // Trigger reflow
    quoteBox.classList.add('show');

    // Update share links with the new quote
    updateShareLinks();
}

nextQuoteButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    displayQuote();
});

// Initialize quote and share links on page load
displayQuote();