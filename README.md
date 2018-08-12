# Project Overview




## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.


# Feed Reader Testing using Jasmine
In this project I was given a web-based application that reads RSS feeds. The premise of the project is that the original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite.


## Motivation
The test suites for this project were created as part of the Grow With Google Front End Web Developer Nanodegree Scholarship. This is Project 4 in the course.
Initial HTML, CSS & Javascript code was provided as part of the project.
I have written the tests using Jasmine.


## Getting Started
View the game here to play online - [ Classic Arcade Game Clone](http://portfolio.threadkind.com/GWGND03-Classic-Arcade-Game-Clone/).

To play the game locally you can clone the repository to your computer.
[The link to the repository can be found here.](https://github.com/threadkind/GWGND03-Classic-Arcade-Game-Clone)

You can download the game directly by clicking on the clone or download link on the repository page.

Alternatively, you can use the command line to clone to repository.
Make sure you have git installed on your system.
Navigate to the folder where you want to clone the repository using the command line terminal.
Then type:
```
git clone https://github.com/threadkind/GWGND03-Classic-Arcade-Game-Clone.git
```
...and press enter.
This will create a local clone on your computer.


In order to play the game, navigate to the repository clone folder and click on the index.html file. This should load in your browser and start up the game.

You can also open the browser first and click `ctrl-o` to open the file selector and navigate to the index.html this way instead.


## How to Play
When you load the page there will be a panel on the page asking you to choose a character. All characters play the same way.
Included on this panel is also a link to the rules of the game, which you can view. This will pop up in a box over the character panel. Use the 'x' in the top right corner to close out the rules and return to the character panel.

Choose a player by clicking on one of the character images to view the full game board and start the game.

If you have played the game before on your device the high-score will load in the game stats panel at the top of the game board from local storage, along with the initials of the person who got the high score. Otherwise the highscore will just show '0000'.

You start the game with a score of 0 and 3 lives showing in the game stats panel at the top of the board. Your character starts the game in the bottom, middle block of the game board.

Gems are randomly generated into spots on the game board when the page is loaded. The orange gem will be somewhere on the first row of stone blocks, the green will be in the middle row and the blue will be on the top row of stone blocks. Collect the gems for extra points as follows:
* Blue Gem = 300 points
* Blue Gem = 200 points
* Blue Gem = 100 points
When a gem is collected the will be a sound and the gem will move from the game board

The ladybug enemys also get added to the game board when the page is loaded and they are assigned random speeds. There will be 2 enemies on each of the 3 stone rows, giving 6 enemies in total.

Use the arrow keys to move your character up, down, left and right. The game will not allow you to move outside of the game board.
For each row you climb on the game board you will earn 20 points. The game keeps track of the highest point you have reached on the game board and you only get another 20 points when you reach a higher row than previously reached.

Make sure to avoid the bugs as you move your character up the game board. If you do collide with a bug, a sound will play, your character will be reset back to the starting position and you will lose a life. The life bar at the top of the game board will decrease by one heart for each collision.

If you lose all of your lives in the game it is game over! A panel will show over the game board advsing you that the game is over and telling you to "Click to Play Again". If you clik the panel, the game will be reloaded and you can start the game again from the beginning. The score, lives and character will all reset.

If you make your way to the top of the game board and reach the water with at least 1 life left a panel will appear to tell you that you have won the game. It will show you your score for the game and give you a bonus of 500 points for each heart you have left in the life bar. It will also display the total score.
Just like the game over panel, the winner panel also has a section that you can click to play again. On this panel you must click on the "Click to Play Again" paragraph to reset the game rather than anywhere on the panel (as you are able to do on the 'Game Over' panel).

If there is no high score in local storage, or you have beaten the current high score, you will be prompted to type in your initials. It you type in the first or second character incorrectly you can delete the characters using backspace. Once you have typed 3 characters (or if you type 0, 1 or 2 characters and press enter), the screen will show a message saying that the high score has been saved. This pushes your score to the local storage, which will be loaded in the game stat bar at the top of the game board next time you play.


## Dependancies
This game is written in HTML, CSS & (Object-Oriented) Javascript. No additional libraries/frameworks were used in its creation.

The game uses [Google Font: Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P).

[Autoprefixer](https://autoprefixer.github.io/) was used to add prefixes to the CSS.

The game engine, basic code and images were provided by Udacity as part of the Grow With Google Nanodegree program.


## Author
- Amy W