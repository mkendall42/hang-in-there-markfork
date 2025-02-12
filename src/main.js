// query selector variables go here 👇

let sectionMainPoster = document.querySelector(".main-poster")
let mainImage = document.querySelector(".poster-img")
let mainTitle = document.querySelector(".poster-title")
let mainQuote = document.querySelector(".poster-quote")

let sectionPosterForm = document.querySelector(".poster-form")
let formNewPoster = document.querySelector("#new-poster-form")
let inputImageURL = document.querySelector("#poster-image-url")
let inputTitle = document.querySelector("#poster-title")
let inputQuote = document.querySelector("#poster-quote")

let sectionSavedPosters = document.querySelector(".saved-posters")
let postersGrid = document.querySelector(".saved-posters-grid")

let sectionUnmotivationalPosters = document.querySelector(".unmotivational-posters")
let unmotivationalGrid = document.querySelector(".unmotivational-posters-grid")

let buttonShowRandomPoster = document.querySelector(".show-random")
let buttonMakeYourOwnPoster = document.querySelector(".show-form")
let buttonSavedPosters = document.querySelector(".show-saved")
let buttonTakeMeBack = document.querySelector(".show-main")
let buttonBackToMain = document.querySelector(".back-to-main")
let buttonShowMyPoster = document.querySelector(".make-poster")
let buttonSaveThisPoster = document.querySelector(".save-poster")
let buttonUnmotivationalPosters = document.querySelector(".show-unmotivational")
let buttonReturnToMotivation = document.querySelector("#return-to-main")



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
var rawUnmotivationalPosters = [
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
var unmotivationalPosters = []
var arePostersLoaded = false



// event listeners go here 👇

//For page load or when random button is clicked, a random image should be chosen:
window.addEventListener("load", function wrapperFunction() { displayPoster(null) })
buttonShowRandomPoster.addEventListener("click", function wrapperFunction() { displayPoster(null) })

//These buttons change visibility of sections on the page:
buttonMakeYourOwnPoster.addEventListener("click", showMakePosterForm)
buttonSavedPosters.addEventListener("click", showSavedPosters)
buttonUnmotivationalPosters.addEventListener("click", showUnmotivationalPosters)
buttonTakeMeBack.addEventListener("click", function wrapperFunction() {
  hideSection(sectionPosterForm)
  showSection(sectionMainPoster)
})
buttonBackToMain.addEventListener("click", function wrapperFunction() {
  hideSection(sectionSavedPosters)
  showSection(sectionMainPoster)
})
buttonReturnToMotivation.addEventListener("click", function wrapperFunction() {
  hideSection(sectionUnmotivationalPosters)
  showSection(sectionMainPoster)
})

//Other functions (involving more than just 'traveling' / changing visibility)
buttonSaveThisPoster.addEventListener("click", savePoster)
formNewPoster.addEventListener("submit", makeAndDisplayPoster)
//Home in one level (parent) above actual poster divs to help with associating HTML element with array element
unmotivationalGrid.addEventListener("dblclick", deletePoster)



// functions and event handlers go here 👇
// (we've provided two to get you started)!

//General-purpose / not belonging to a section functions:

//Refactored variants of provided functions
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function createPoster(imageURL, title, quote, alternateText = "") {
  return {
    id: Math.floor(Math.random() * 9e8 + 1e8),    //Needed to ensure unique ID (could repeat, but P ~ 10^-8 for this usage case)
    imageURL: imageURL, 
    title: title, 
    quote: quote,
    altText: alternateText
  }
}

function cleanData(posters) {
  for (let i = 0; i < posters.length; i++) {
    unmotivationalPosters[i] = createPoster(posters[i].img_url, posters[i].name, posters[i].description, "Unmotivational poster text goes here")
  }
}

function hideSection(section) {
  section.classList.add("hidden")
}

function showSection(section) {
  section.classList.remove("hidden")
}


//Section Main Page functions:

function displayPoster(poster) {
  if (poster === null) {
    poster = createPoster(getRandomElement(images), getRandomElement(titles), getRandomElement(quotes), "Motivation image goes here")
  }

  currentPoster = poster

  mainImage.src = poster.imageURL
  mainImage.alt = poster.altText
  mainTitle.innerText = poster.title
  mainQuote.innerText = poster.quote
}

function savePoster() {
  //Verify unique entry (and exit early if duplicate - more efficient)
  for (let i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].imageURL === currentPoster.imageURL && savedPosters[i].title === currentPoster.title && savedPosters[i].quote === currentPoster.quote) {
      return
    }
  }

  savedPosters.push(currentPoster)
}


//Section Make Poster Form functions:

function showMakePosterForm() {
  hideSection(sectionMainPoster)
  showSection(sectionPosterForm)
}

function makeAndDisplayPoster(event) {
  event.preventDefault()

  let formData = new FormData(formNewPoster)      //Note: implemented before we learned .value
  let submittedImageURL = formData.get("poster-image-url")
  let submittedTitle = formData.get("poster-title")
  let submittedQuote = formData.get("poster-quote")
  formNewPoster.reset()

  //Ensure form has actual entered data (not only '')
  if(submittedImageURL && submittedTitle && submittedQuote) {
    images.push(submittedImageURL)
    titles.push(submittedTitle)
    quotes.push(submittedQuote)
    currentPoster = createPoster(submittedImageURL, submittedTitle, submittedQuote, "Created motivational poster")
  }

  displayPoster(currentPoster)
  hideSection(sectionPosterForm)
  showSection(sectionMainPoster)
}


//Section Saved Posters functions:

function showSavedPosters() {
  hideSection(sectionMainPoster)
  showSection(sectionSavedPosters)

  postersGrid.innerHTML = ""          //Needed, or we get some fun MTG-style cumulative upkeep effects!
  for (let i = 0; i < savedPosters.length; i++) {
    postersGrid.innerHTML += `<div class="mini-poster">
                              \t<img src="${savedPosters[i].imageURL}" alt="${savedPosters[i].altText}">
                              \t<h2>${savedPosters[i].title}</h2>
                              \t<h4>${savedPosters[i].quote}</h4>
                              </div>`
  }
}


//Section Show Unmotivational Posters functions:

function showUnmotivationalPosters() {
  hideSection(sectionMainPoster)
  showSection(sectionUnmotivationalPosters)

  //Only load the posters once (for efficiency - especially for bigger datasets)
  if (!arePostersLoaded) {
    cleanData(rawUnmotivationalPosters)
    arePostersLoaded = true
  }

  unmotivationalGrid.innerHTML = ""
  for (let i = 0; i < unmotivationalPosters.length; i++) {
    unmotivationalGrid.innerHTML += `<div class="mini-unmotivational-poster" id="${unmotivationalPosters[i].id}">
                                      \t<img src="${unmotivationalPosters[i].imageURL}" alt="${unmotivationalPosters[i].altText}">
                                      \t<h2>${unmotivationalPosters[i].title}</h2>
                                      \t<h4>${unmotivationalPosters[i].quote}</h4>
                                      </div>`
  }
}

function deletePoster() {
  //Refactored based on learning about .closest(); also did another variant 'bubbling up' to parent element before
  // if (currentElement = event.target.closest(".mini-unmotivational-poster")) {
  //   let remainingPosters = unmotivationalPosters.filter((poster) => {
  //     return poster.id !== Number(currentElement.id)
  //   })
  
  //   unmotivationalPosters = remainingPosters
  //   currentElement.remove()
  // }

  //Other appraoches / refactors:
  //Using findIndex():
  if (currentElement = event.target.closest(".mini-unmotivational-poster")) {
    let deleteIndex = unmotivationalPosters.findIndex((poster) => {
      return poster.id !== Number(currentElement.id)
    })
    unmotivationalPosters.splice(deleteIndex, 1)
    currentElement.remove()
  }
  //Using a good 'ol for loop:
  // if (currentElement = event.target.closest(".mini-unmotivational-poster")) {
  //   for (let i = 0; i < unmotivationalPosters.length; i++) {
  //     if (unmotivationalPosters[i].id === Number(currentElement.id)) {
  //       unmotivationalPosters.splice(i, 1)
  //       break
  //     }
  //   }
  //   currentElement.remove()
  // }
}


//Optional extensions related functions:

//If we want to do data validation, we might want to monitor as keys are pressed / data is entered; OR once submit button is being attempted to be clicked
  //Options: need to monitor as keys are pressed / data entered to determine if button can be pressed or not.
  //One way to do this is via an event listender, like this:
  // inputImageURL.addEventListener("selectionchange", FUNCTION)
  
  // if (typeof(inputImageURL.value) !== "string") {
  //   //problem
  // }
  // if (typeof(inputTitle.value) !== "string" || inputTitle.value.length > 15) {
  //   //very long titles are tough to display reasonably well
  // }
  // if (typeof(inputQuote.value) !== "string" || inputQuote.value.length > 150) {
  //   //no more than 2 lines of quote text really makes sense here...
  // }


// mainImage.addEventListener("dblclick", )
// mainTitle.addEventListener("dblclick", )
// mainQuote.addEventListener("dblclick", )

// function randomizeComponent() {
//   //Check which type of element should be randomized
//   if (this.tagName.toLowerCase() === "img") {
//     this.src = 
//     return createPoster(getRandomElement(images), currentPoster.title, currentPoster.quote, currentPoster.altText)
//   } else if (this.tagName.toLowerCase() === "h1") {

//   } else if (this.tagName.toLowerCase() === "h3") {

//   }

//   //This is quicker, but probably not good (using more global var access)
//   if (this.tagName.toLowerCase() === "img") {
//     currentPoster.imageURL = getRandomElement(images)
//   }
//   //Etc.
// }
