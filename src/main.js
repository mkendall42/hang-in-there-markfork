// query selector variables go here 👇
//Keep these simple for now; refactor to utilize objects / createPoster() fn later
let sectionMainPoster = document.querySelector(".main-poster")
let mainImage = document.querySelector(".poster-img")   //Contains both src and alt attrs
let mainTitle = document.querySelector(".poster-title")
let mainQuote = document.querySelector(".poster-quote")

let sectionPosterForm = document.querySelector(".poster-form")   //Should be static and unique enough
let formNewPoster = document.querySelector("#new-poster-form")   //I manually created this ID to uniquely locate it
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
let buttonTakeMeBack = document.querySelector(".show-main")     //This worries me; this class could easily be re-used somewhere else...
let buttonBackToMain = document.querySelector(".back-to-main")  //Again, overlapping function with the above (not DRY really...or at the least, makes it less clear)
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
let rawUnmotivationalPosters = [
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
var arePostersLoaded = false      //Controls loading raw poster data only once (alt could be to call cleanData() during initial page load)


//MOVE THIS TO FUNCTIONS REGION LATER!!!
// async function cleanData(posters) {
//   //Assume that we are modifying in-place the posters variable
//   for (let i = 0; i < posters.length; i++) {
//     unmotivationalPosters[i] = createPoster(posters[i].img_url, posters[i].name, posters[i].description)
//     await sleep(1)      //This will force a unique ID for each poster.  Also doesn't sleep exactly 1ms.  Seems awfully convoluted just to preserve the preexisting structure...
//     //Alternate is to allow manual setting of IDs as a default arg
//   }
// }

// function sleep(milliSeconds) {
//   return new Promise(resolve => setTimeout(resolve, milliSeconds))
// }
function cleanData(posters) {
  //Yep, the async function was definitely causing issues - would only load the FIRST unmotivational poster the first time
  for (let i = 0; i < posters.length; i++) {
    unmotivationalPosters[i] = createPoster(posters[i].img_url, posters[i].name, posters[i].description, "Unmotivational poster text goes here")
    //Temporary fix: force the IDs to increment by one so they're truly unique.  Turns out ms aren't precise enough for this operation (they all load in < 1 ms)...
    unmotivationalPosters[i].id += i
  }
}



// event listeners go here 👇

//For page load, a random image should be chosen:
// mainImage.addEventListener("PAGE_LOAD", randomDisplayedPoster)  NOPE THIS WOULD HAVE GOTTEN ME IN TROUBLE!
window.addEventListener("load", function wrapperFunction() { displayPoster(null) })
//When random button is clicked, it should (re-)randomize the image:
buttonShowRandomPoster.addEventListener("click", function wrapperFunction() { displayPoster(null) })


//These buttons change visibility of sections on the page:
//When make own button clicked, should hide the current poster, and instead display the form (i.e. toggle visibility of BOTH)
buttonMakeYourOwnPoster.addEventListener("click", showMakePosterForm)
//When show saved button clicked, hide current poster, and display saved posters (smaller)
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
//Do I need this one?  I think the submit (button) is covered above...
buttonShowMyPoster.addEventListener("click", makeAndDisplayPoster)

//Set event listener for region on unmotivational poster page.
//I decided to home in closer to the images to help with recovering the array element w/ the HTML element (see deletePoster() for complexity)
// sectionUnmotivationalPosters.addEventListener("dblclick", deletePoster)
unmotivationalGrid.addEventListener("dblclick", deletePoster)



// functions and event handlers go here 👇
// (we've provided two to get you started)!
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

//Refactored variant of provided function (more compact / self-contained)
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function createPoster(imageURL, title, quote, alternateText = "") {
  //Added default alt text here so it doesn't have to keep appearing elsewhere.
  return {
    id: Date.now(),       //See needed adjustment in cleanData() function
    imageURL: imageURL, 
    title: title, 
    quote: quote,
    altText: alternateText
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
  mainImage.alt = poster.altText
  mainTitle.innerText = poster.title
  mainQuote.innerText = poster.quote
}

function randomPoster() {
  //If this is only used once (in displayPoster()), just move up there directly...
  return createPoster(getRandomElement(images), getRandomElement(titles), getRandomElement(quotes), "Motivation image goes here")
}

function showMakePosterForm() {
  hideSection(sectionMainPoster)
  showSection(sectionPosterForm)
}

function showSavedPosters() {
  //Hide current poster (entire section - buttens included, etc.)
  hideSection(sectionMainPoster)
  showSection(sectionSavedPosters)

  //Now display the actual saved photos
  postersGrid.innerHTML = ""          //Needed, or you get some fun MTG-style cumulative upkeep effects!
  for (let i = 0; i < savedPosters.length; i++) {
    //Alt: maybe do the each 'enumerable' later?
    //Access sectionSavedPosters, but we really want the <div> within...how to access this?
    //I'd rather find a new way besides a full document query...also is it ok for me to do this locally vs putting at top of JS file?
    // sectionSavedPosters.innerHTML += 
    //Maybe create a whole new <div>?
    postersGrid.innerHTML += `<div class="mini-poster">
                              \t<img src="${savedPosters[i].imageURL}" alt="${savedPosters[i].altText}">
                              \t<h2>${savedPosters[i].title}</h2>
                              \t<h4>${savedPosters[i].quote}</h4>
                              </div>`
  }
}

function showUnmotivationalPosters() {
  hideSection(sectionMainPoster)
  showSection(sectionUnmotivationalPosters)

  //Get our unmotivational poster data array ready!
  //NOTE: this can only be run ONCE (cleaning cleaned data will confuse the moethods!)
  //FIX THIS / MOVE IT ACCORDINGLY LATER!!!
  //Update: I've decided to send raw data into cleaned variable now; this would just make more sense in most cases, I think
  if (!arePostersLoaded) {
    cleanData(rawUnmotivationalPosters)
    arePostersLoaded = true
    console.log("Loaded unmotivational posters")
  }

  unmotivationalGrid.innerHTML = ""
  for (let i = 0; i < unmotivationalPosters.length; i++) {
    //For now, just format like saved posters page.
    //ADJUST LATER!
    unmotivationalGrid.innerHTML += `<div class="mini-unmotivational-poster" id="${unmotivationalPosters[i].id}">
                                      \t<img src="${unmotivationalPosters[i].imageURL}" alt="${unmotivationalPosters[i].altText}">
                                      \t<h2>${unmotivationalPosters[i].title}</h2>
                                      \t<h4>${unmotivationalPosters[i].quote}</h4>
                                      </div>`
  }
}

function makeAndDisplayPoster(event) {
  //First, bypass default behavior.  This is apparently deprecated...so what is modern then?
  event.preventDefault()

  //If we want to do data validation, would it go here, or do I need another function w/ a different event listtener?  Probably this...


  //Collect data.  Later / fancier: do error checking, have user re-do if needed
  let formData = new FormData(formNewPoster)      //Had to look this up.  Alt might be to do usual button event and some other trickery?
  //Alt: could grab .value on <input> tags
  let submittedImageURL = formData.get("poster-image-url")
  let submittedTitle = formData.get("poster-title")
  let submittedQuote = formData.get("poster-quote")

  //Create new poster (currentPoster is a global var, and thus accessible here...don't know if I like that)
  currentPoster = createPoster(submittedImageURL, submittedTitle, submittedQuote, "Created motivational poster")

  //Don't actually save the poster yet (that is done on the main page...)
  // addPosterToLibrary(currentPoster)

  //Toggle visibilities and display new poster (instead of random / previous)
  displayPoster(currentPoster)
  hideSection(sectionPosterForm)
  showSection(sectionMainPoster)
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
    if (savedPosters[i].imageURL === poster.imageURL && savedPosters[i].title === poster.title && savedPosters[i].quote === poster.quote) {
      return
    }
  }

  //Actually save it
  savedPosters.push(poster)
}

function deletePoster() {
  //This is called when user double-clicks on 
  //NOTE: 'event' is apparently deprecated, and can be fragile.  I should look into using 'Event' instead...
  let currentElement = event.target

  debugger
  
  // if (!currentElement.classList.contains("unmotivational-posters-grid")) {
  //   //We found an actual poster - delete it both from HTML and the data array
  //   //One way to do this is to remove it from the array, then re-generate the innerHTML (maybe make it its own function?)
  //   // event.target
  //   //Hmmm, I feel like I need to 'backtrace' from the element to figure out the array element it came from.
  //   //This seems awfully awkward / clunky, and not efficient.  There must be a better way...
  //   //Also, it's ambiguous what *part* of the <div> the user will click on, so the current element or a child / parent element might need to actually be accessed
  //   //This is getting ridiculous, I'm gonna use IDs (which means rewriting the id: property too!)
  //   //Even IDs are a problem...they won't exist for e.g. the <h2> title element!  WTF?!

  //   //Ok, I think I have a solution.  Look at current element's class === ".mini-poster"; if not, move up to the parent iteratively until there.
  //   //THEN we can use the ID to finally match it with the array element
  //   //Again, this is RIDICULOUSLY convoluted...
  //   while (!currentElement.classList.contains("mini-poster")) {
  //     //I'm counting on this not getting stuck in the loop...
  //     currentElement = currentElement.parentElement
  //   }

    
  //   for (let i = 0; i < unmotivationalPosters.length; i++) {
  //     if (unmotivationalPosters[i].id === Number(currentElement.id)) {
  //       //Remove it from the array!
  //       unmotivationalPosters.splice(i, 1)
  //       console.log("Shrunk poster array: ", unmotivationalPosters)
  //       currentElement.classList.add("hidden")      //Hack-ey approach, but work visually (and functionally next load won't bring it in)
  //       break
  //     }
  //   }
  //   //The optimal approach would be to simply remove the (nested) HTML elements.
  //   //Alternately, could call showUnmotivationalPosters()
  //   //OR: might be able to use element.removeChild() to delete HTML child node (and hopefully recursively)


  //   //MDN: .closest() - check this out!
  //   //Could use .getElementsByTagName() -> returns an array of children elements matching given tag(s)
  //   //.currentTarget -> bubbles up to the parent target for event listener

  // }

  //Alternate approach, using closest() function:
  if (currentElement.classList.contains("unmotivational-posters-grid")) {
    return
  }
  //If we made it here, we clicked on something valid
  currentElement = currentElement.closest("div")
  // currentElement = currentElement.closest(".mini-poster")   //Does this work too?

  for (let i = 0; i < unmotivationalPosters.length; i++) {
    if (unmotivationalPosters[i].id === Number(currentElement.id)) {
      //Found it!
      unmotivationalPosters.splice(i, 1)
      currentElement.classList.add("hidden")        //Again, hackey...but it serves the purpose for now
      currentElement.remove()                       //What about this one?
      break
    }
  }

  unmotivationalPosters.forEach((poster, index) => {
    if (poster.id === Number(currentElement.id)) {
      unmotivationalPosters.splice(index, 1)
      currentElement.remove()
      // break                     //Hmm, this won't work for this 'enumerable'.  Then, this seems less effective...
    }
  })

}


//These almost seem silly, but do provide good readability, so yeah...
function hideSection(section) {
  section.classList.add("hidden")
}

function showSection(section) {
  section.classList.remove("hidden")
}
