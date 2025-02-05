// query selector variables go here 👇
//Keep these simple for now; refactor to utilize objects / createPoster() fn later
let mainImage = document.querySelector(".poster-img")   //Contains src and alt attrs
let mainTitle = document.querySelector(".poster-title")
let mainQuote = document.querySelector(".poster-quote")
let buttonShowRandomPoster = document.querySelector(".show-random")
let buttonMakeYourOwnPoster = document.querySelector(".show-form")
let buttonSavedPosters = document.querySelector(".show-saved")
let buttonTakeMeBack = document.querySelector(".show-main")     //This worries me; this class could easily be re-used somewhere else...
let buttonBackToMain = document.querySelector(".back-to-main")  //Again, overlapping function with the above (not DRY really...or at the least, makes it less clear)
let buttonShowMyPoster = document.querySelector(".make-poster")
let posterForm = document.querySelector(".poster-form")   //Should be static and unique enough
let sectionSavedPosters = document.querySelector(".saved-posters")

//These REALLY make more sense in the function further down, but ok...
// let posterImageURL = document.querySelector()
// let posterTitle = document.querySelector()
// let posterQuote = document.querySelector()
let formData = document.querySelector("#new-poster-form")   //I manually created this ID to uniquely locate it

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;


// event listeners go here 👇

//For page load, a random image should be chosen:
// mainImage.addEventListener("PAGE_LOAD", changeDisplayedPoster)
window.addEventListener("load", changeDisplayedPoster)

//When random button is clicked, it should (re-)randomize the image:
buttonShowRandomPoster.addEventListener("click", changeDisplayedPoster)

//When make own button clicked, should hide the current poster, and instead display the form (i.e. toggle visibility of BOTH)
buttonMakeYourOwnPoster.addEventListener("click", toggleMakePosterForm)

//When show saved button clicked, hide current poster, and display saved posters (smaller)
buttonSavedPosters.addEventListener("click", toggleSavedPosters)

//Get back to the main page!  (Again, kinda repetitive here...)
buttonTakeMeBack.addEventListener("click", takeMeBack)
buttonBackToMain.addEventListener("click", backToMain)

buttonShowMyPoster.addEventListener("click", makeAndDisplayPoster)

formData.addEventListener("submit", )

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

//Custom-built functions:
function changeDisplayedPoster() {
  //Again, serious refactoring is in order here later...
  mainImage.src = images[getRandomIndex(images)]
  mainImage.alt = "Some motivational image here"    //Mostly to differentiate from default HTML one
  mainTitle.innerText = titles[getRandomIndex(titles)]
  mainQuote.innerText = quotes[getRandomIndex(quotes)]
}

function toggleMakePosterForm() {
  //Hide current poster
  //NOTE: incomplete: still a black border bar.  Need to target a 'larger' element / node...
  mainImage.classList.toggle("hidden")
  mainTitle.classList.toggle("hidden")
  mainQuote.classList.toggle("hidden")

  //Show form and allow interaction
  posterForm.classList.toggle("hidden")
}

function toggleSavedPosters() {
  //Hide current poster
  //Again, redesign and refactor (since used above as well)
  mainImage.classList.toggle("hidden")
  mainTitle.classList.toggle("hidden")
  mainQuote.classList.toggle("hidden")  

  //Show saved posters, etc.
  //Maybe even refactor more broadly - pass node as argument if that's possible?
  sectionSavedPosters.classList.toggle("hidden")
  
}

function takeMeBack() {
  toggleMakePosterForm()
}

function backToMain() {
  toggleSavedPosters()
}

function makeAndDisplayPoster(event) {
  //First, bypass default behavior.  This is apparently deprecated...so what is modern then?
  event.preventDefault()
  //Collect data
  formData

  //Create new poster (currentPoster is a global var, and thus accessible here...don't know if I like that)
  currentPoster = createPoster(imageURL, title, quote)
  
  //Toggle visibilities and display new poster (instead of random / previous)

}


//Trying out finding a random poster:
// for (let i = 0; i < 10; i++) {
//   console.log("Found random image URL: ", images[getRandomIndex(images)])

// }

//Some scratchin' beforehand (can remove in a little while)
// console.log("Hello, world!");
// console.log("quotes: ", quotes);
// console.log("savedPosters: ", savedPosters);

// //Try modifying the array and check contents:
// savedPosters.push("some random poster");
// console.log("new savedPosters: ", savedPosters);
