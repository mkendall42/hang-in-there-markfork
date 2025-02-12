
# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This webpage is a tongue-in-check motivational poster creator and organizer.  It can generate random posters (formatted and displayed appropriately), or the user can design their own.  These may be saved and viewed later.  Additionally, unmotivational posters are provided for balance, which may be deleted.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
This webpage may be [viewed directly on GitHub here](https://mkendall42.github.io/hang-in-there-markfork/) (it is deployed).  One may clone the repo if desired; to view and interact with the page, simply run `open index.html`.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off. gifs preferred!)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This is an individual project for mod 2, and we were provided just over one week to complete the work.

### Contributors:
[//]: <> (Who worked on this application? Link to your GitHub. Consider also providing LinkedIn link)
As this was an individual project, I (Mark Kendall) am the sole contributor.  
[GitHub link](https://github.com/mkendall42)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
This project was designed to primarily teach the following:
- Usage of HTML, CSS, and JavaScript
- Proper styling of various page elements, including for the purposes of comp matching
- Various JavaScript functionality (especially querying, event listeners, and associated event handlers / functions) to provide user interaction, which often will dynamically alter the HTML content and user experience, as well as maintaining and updating object in the JS file
- Clean and DRY functions written in JavaScript, as well as consistency in formatting and style (HTML, CSS, JS)

In addition to working directly with the source files for HTML, CSS, and JS, I spent significant time utilizing the integrated dev tools within Chrome in order to evaluate elements, user interaction, and variable states.  The `debugger` option is especially useful for real-time inspecting of specific elements and events (e.g. `event.target` is especially useful here).

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Challenges:
- Especially for the first 4-5 days, aspects of the iterations in the project required us to do things we had not yet learned.  This required some degree of independent research and a lot of trial and error.  I made regular use of the dev tools and inspecting the state of variables, and reference to MDN docs.
- Some frontend content, especially CSS, seems to me to be very property-heavy, such that there are countless things that can be tweaked / adjusted (and if you don't know exactly what you're looking for, you may not find it).  This feels like a heavier memorization lift to me than for some languages such as Ruby, and I have always struggled more with memorization - I much prefer reasoning and logic with more limited tools to achieve a specific outcome.
- I struggle with utilizing external resources - I am determined to solve problems with minimal help.  While this often serves me well - and indeed helps me with maximum learning (nothing helps more than a struggle) - it can sometimes take too long or become unproductive.  I worked on seeking out external resources slightly quicker than I would have in the past (MDN, but also some Googling / Reddit / Stack Overflow).
- I continue to struggle with balance in terms of coding style and best practices.  For example, making compact but *also* readable code.  In some cases, this meant making more functions than I otherwise would have (e.g. hideSection() and showSection()) simply because they are easy to interpret by another developer (or even myself!).  Additionally, comments are still tricky for me; I am working on minimizing their presence in a file, but I continue to see more value in an occasional annotation than many, it would seem.

Wins:
- Completion of iterations 1-6, with significant time and resources going into purposeful refactoring and cleaning up of code to improve flow, readability, and efficiency.
- Multiple implementations (though only one given, of course) for some of the fancier functionality, such as in deletePoster().  I enjoy experimenting with different approaches, especially given that some might be more efficient than others / trade some drawbacks.
- Some degree of understanding CSS; it will no doubt be a long work in progress, and probably a 'good enough' mentality for me as I move along.  I definitely appreciate its role in proper presentation and the effect on UI / UX.
- Beginning to see how many components fit together on the front end.  I am very curious as to the inner workings of the browser and how e.g. it constructs and manages node data, requests, events and so forth, but I also appreciate some of that will be outside the scope of what I need to / can do, and I am learning to better deal with that abstraction when needed (I can't tell you how difficult that is as a scientist...)