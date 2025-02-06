// query selector variables go here 👇
//Keep these simple for now; refactor to utilize objects / createPoster() fn later
let sectionMainPoster = document.querySelector(".main-poster")
let mainImage = document.querySelector(".poster-img")   //Contains both src and alt attrs
let mainTitle = document.querySelector(".poster-title")
let mainQuote = document.querySelector(".poster-quote")

let buttonShowRandomPoster = document.querySelector(".show-random")
let buttonMakeYourOwnPoster = document.querySelector(".show-form")
let buttonSavedPosters = document.querySelector(".show-saved")
let buttonTakeMeBack = document.querySelector(".show-main")     //This worries me; this class could easily be re-used somewhere else...
let buttonBackToMain = document.querySelector(".back-to-main")  //Again, overlapping function with the above (not DRY really...or at the least, makes it less clear)
let buttonShowMyPoster = document.querySelector(".make-poster")
let buttonSaveThisPoster = document.querySelector(".save-poster")
let buttonUnmotivationalPosters = document.querySelector(".show-unmotivational")
let buttonReturnToMotivation = document.querySelector("#return-to-main")

let posterForm = document.querySelector(".poster-form")   //Should be static and unique enough

let sectionSavedPosters = document.querySelector(".saved-posters")
// let postersGrid = document.querySelector(".saved-posters-grid")
let sectionUnmotivationalPosters = document.querySelector(".unmotivational-posters")

//These REALLY make more sense in the function further down, but ok...
// let posterImageURL = document.querySelector()
// let posterTitle = document.querySelector()
// let posterQuote = document.querySelector()
let formNewPoster = document.querySelector("#new-poster-form")   //I manually created this ID to uniquely locate it

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

//Unmotivational poster data (assume it was e.g. pulled from a database)
let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

function cleanData(posters) {
  //Assume that we are modifying in-place the posters variable
  for (let i = 0; i < posters.length; i++) {
    posters[i] = createPoster(posters[i].img_url, posters[i].name, posters[i].description)
  }
}


// event listeners go here 👇

//For page load, a random image should be chosen:
// mainImage.addEventListener("PAGE_LOAD", randomDisplayedPoster)  NOPE THIS WOULD HAVE GOTTEN ME IN TROUBLE!
window.addEventListener("load", function wrapperFunction() { displayPoster(null) })

//When random button is clicked, it should (re-)randomize the image:
buttonShowRandomPoster.addEventListener("click", function wrapperFunction() { displayPoster(null) })

//When make own button clicked, should hide the current poster, and instead display the form (i.e. toggle visibility of BOTH)
buttonMakeYourOwnPoster.addEventListener("click", toggleMakePosterForm)

//When show saved button clicked, hide current poster, and display saved posters (smaller)
buttonSavedPosters.addEventListener("click", toggleSavedPosters)

//Get back to the main page!  (Again, kinda repetitive here...)
buttonTakeMeBack.addEventListener("click", takeMeBack)
buttonBackToMain.addEventListener("click", backToMain)

buttonShowMyPoster.addEventListener("click", makeAndDisplayPoster)

formNewPoster.addEventListener("submit", makeAndDisplayPoster)

buttonSaveThisPoster.addEventListener("click", savePoster)

buttonUnmotivationalPosters.addEventListener("click", showUnmotivationalPosters)
buttonReturnToMotivation.addEventListener("click", backToMotivation)

// functions and event handlers go here 👇
// (we've provided two to get you started)!
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

//Refactored variant (more compact / self-contained)
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function createPoster(imageURL, title, quote) {
  //NOTE: maybe add default alt text here so it doesn't keep appearing elsewhere?  How to handle default parameter?
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

//Custom-built functions:

function displayPoster(poster) {
  //Display the supplied poster.  If no poster provided, choose one at random
  if (poster === null) {
    poster = randomPoster()
  }

  //By default, set the currentPoster var when this function is called (might change later?)
  currentPoster = poster

  mainImage.src = poster.imageURL
  mainImage.alt = "Motivation image goes here"      //Mostly to differentiate from default HTML one
  mainTitle.innerText = poster.title
  mainQuote.innerText = poster.quote
}

function randomPoster() {
  //If this is only used once (in displayPoster()), just move up there directly...
  return createPoster(getRandomElement(images), getRandomElement(titles), getRandomElement(quotes))
}

function toggleMakePosterForm() {
  //Hide current poster
  //NOTE: incomplete: still a black border bar.  Need to target a 'larger' element / node...
  sectionMainPoster.classList.toggle("hidden")

  //Show form and allow interaction
  posterForm.classList.toggle("hidden")
}

function toggleSavedPosters() {
  //Hide current poster (entire section - buttens included, etc.)
  //Again, redesign and refactor (since used above as well)
  sectionMainPoster.classList.toggle("hidden")

  //Show saved posters, etc.
  //Maybe even refactor more broadly - pass node as argument if that's possible?
  sectionSavedPosters.classList.toggle("hidden")

  //Now display the actual saved photos
  let postersGrid = document.querySelector(".saved-posters-grid")
  postersGrid.innerHTML = ""          //Needed, or you get some fun MTG-style cumulative upkeep effects!
  for (let i = 0; i < savedPosters.length; i++) {
    //Alt: maybe do the each 'enumerable' later?
    //Access sectionSavedPosters, but we really want the <div> within...how to access this?
    //I'd rather find a new way besides a full document query...also is it ok for me to do this locally vs putting at top of JS file?
    // sectionSavedPosters.innerHTML += 
    //Maybe create a whole new <div>?
    postersGrid.innerHTML += `<div class="mini-poster">
                              \t<img src="${savedPosters[i].imageURL}" alt="Motivation image goes here">
                              \t<h2>${savedPosters[i].title}</h2>
                              \t<h4>${savedPosters[i].quote}</h4>
                              </div>`
    // savedPosters[i]
  }
}

function showUnmotivationalPosters() {
  //Same idea as for create new, or show posters
  // sectionUnmotivationalPosters.classList.toggle("hidden")   //Toggle is getting me in trouble...
  sectionUnmotivationalPosters.classList.remove("hidden")
  sectionMainPoster.classList.add("hidden")

  //Get our unmotivational poster data array ready!
  //NOTE: this can only be run ONCE (cleaning cleaned data will confuse the moethods!)
  //FIX THIS / MOVE IT ACCORDINGLY LATER!!!
  cleanData(unmotivationalPosters)

  debugger
  

  let unmotivationalGrid = document.querySelector(".unmotivational-posters-grid")
  unmotivationalGrid.innerHTML = ""

}

function takeMeBack() {
  toggleMakePosterForm()
}

function backToMain() {
  toggleSavedPosters()    //This had unintended effects when I was using innerHTML += before.  Rewrite this eventually, not optimal...
}

function backToMotivation() {
  if (sectionUnmotivationalPosters.classList.contains("hidden")) {
    console.log("Error: unmotivational section should already be displayed!")
  } else {
    sectionUnmotivationalPosters.classList.add("hidden")
    sectionMainPoster.classList.remove("hidden")
  }
}

function makeAndDisplayPoster(event) {
  //First, bypass default behavior.  This is apparently deprecated...so what is modern then?
  event.preventDefault()
  //Collect data.  Later / fancier: do error checking, have user re-do if needed
  let formData = new FormData(formNewPoster)      //Had to look this up.  Alt might be to do usual button event and some other trickery?
  //Alt: could grab .value on <input> tags
  let submittedImageURL = formData.get("poster-image-url")
  let submittedTitle = formData.get("poster-title")
  let submittedQuote = formData.get("poster-quote")

  //Create new poster (currentPoster is a global var, and thus accessible here...don't know if I like that)
  currentPoster = createPoster(submittedImageURL, submittedTitle, submittedQuote)

  //Don't actually save the poster yet (that is done on the main page...)
  // addPosterToLibrary(currentPoster)

  //Toggle visibilities and display new poster (instead of random / previous)
  displayPoster(currentPoster)

  takeMeBack()
}

function savePoster() {
  addPosterToLibrary(currentPoster)
  //Might have additional functionality later, like feedback to the user that the operation was successful or not (e.g. duplicate, or go to saved pics page)
}

function addPosterToLibrary(poster) {
  //NOTE: this only adds to the savedPosters[] array, NOT to the actual random images, titles, quotes.
  //Might want to have this option as well later, which would go here.

  //Verify this is a unique entry.  It is unique only if everything other than the id is different (since that had BETTER change!)
  for (let i = 0; i < savedPosters.length; i++) {

    // debugger

    if (savedPosters[i].imageURL === poster.imageURL && savedPosters[i].title === poster.title && savedPosters[i].quote === poster.quote) {
      return
    }
  }

  //Actually save it
  savedPosters.push(poster)

  // debugger

  // images.push(poster.imageURL)
  // titles.push(poster.title)
  // quotes.push(poster.quote)
}


//Trying out finding a random poster:
// for (let i = 0; i < 10; i++) {
//   console.log("Found random image URL: ", images[getRandomIndex(images)])

// }
// debugger

//Some scratchin' beforehand (can remove in a little while)
// console.log("Hello, world!");
// console.log("quotes: ", quotes);
// console.log("savedPosters: ", savedPosters);

// //Try modifying the array and check contents:
// savedPosters.push("some random poster");
// console.log("new savedPosters: ", savedPosters);
