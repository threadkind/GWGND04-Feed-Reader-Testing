# Feed Reader Testing using Jasmine
In this project I was given a web-based application that reads RSS feeds. The premise of the project is that the original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite.


## Motivation
The test suites for this project were created as part of the Grow With Google Front End Web Developer Nanodegree Scholarship. This is Project 4 in the course.
Initial HTML, CSS & Javascript/JQuery code was provided as part of the project.
I have written the tests using Jasmine.


## Getting Started
View the application here to online - [ Feed Reader Testing with Jasmine](http://portfolio.threadkind.com/GWGND04-Feed-Reader-Testing/).

To view the app locally you can clone the repository to your computer.
[The link to the repository can be found here.](https://github.com/threadkind/GWGND04-Feed-Reader-Testing)

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


In order to view the app, navigate to the repository clone folder and click on the index.html file. This should load in your browser and start up the app.

You can also open the browser first and click `ctrl-o` to open the file selector and navigate to the index.html this way instead.


## Features of the App
When you load the page there will be a list of articles that have been pulled through using an RSS feed.

The hamburger menu in the top left corner allows you to find other feeds to view. Simply click on the menu icon and this will open up a menu panel for you to choose a different feed. When you choose a different feed from the menu panel the articles on the page will update to show articles from this new feed that you have chosen.

If you scroll down to the very bottom of the page you will see the Jasmine tests, their status and the specs.

The Jasmine tests have the following specs:
* RSS Feeds
  * are defined
  * have a defined URL
  * have a defined name
* The Menu
  * is hidden by default
    * changes visibility when the menu item is clicked
* Initial Entries
  * have at least a single .entry element within the .feed container
* New Feed Selection
  * changes the content when a new feed is loaded by the loadFeed function


## Dependancies
This app is written in HTML, CSS & Javascript/JQuery.
The testing suites are written in Jasmine.

The app code was provided by Udacity as part of the Grow With Google Nanodegree program.


## Author
- Amy W