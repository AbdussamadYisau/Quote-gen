var quotes = [
   "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
   "All computers wait at the same speed.",
   "A misplaced decimal point will always end up where it will do the greatest damage.",
   "A good programmer looks both ways before crossing a one-way street.",
   "A computer program does what you tell it to do, not what you want it to do.",
   "Beta is Latin for still doesn\'t work",
   "Hey! It compiles! Ship it!",
   "First, solve the problem. Then, write the code.",
    "Pasting code from the Internet into production code is like chewing gum found in the street.",
    "Profanity is the one language all programmers know best.",
    "There is nothing quite as permanent as a quick fix.",
    "Java is to Javascript what Car is to carpet.",
    "The artist belongs to his work, not the work to the artist."
 ]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
/** Placing the quote into the HTML quoteDisplay element **/
document.getElementById("quotesDisplay").innerHTML = quotes[randomNumber];
}

