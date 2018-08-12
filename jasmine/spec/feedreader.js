/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loop through each feed and make sure the URL is defined and not empty
        it('have a defined URL', function(){
            for(let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("", '', null);
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // loop through each feed and make sure the name is defined and not empty
        it('have a defined name', function(){
            for(let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("", '', null);
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    // Test suite to test the menu
    describe('The menu', function() {

        // Set variables to get the body element and the menu icon link element
        const b = $('body');
        const menuIcon = $('.menu-icon-link');

        // Test to make sure the menu is hidden by default. If it is hidden by default, then when the page is loaded the body should have class 'menu-hidden', which provides the css to hide the menu
        it('is hidden by default', function(){
            expect(b.hasClass('menu-hidden')).toBe(true);
        });

        // Test to make sure the menu changes visibility when clicked.
        it('changes visibility when the menu item is clicked', function(){
            // Per the previous test, the menu should be hidden by default - if the previous test passes then we know this to be true.

            // Trigger a click on the menuIcon
            menuIcon.click();
            // First click on the page should remove the 'menu-hidden' class from the body
            expect(b.hasClass('menu-hidden')).toBe(false);

            // Trigger a second click on the menuIcon
            menuIcon.click();
            // Second click on the page should remove the 'menu-hidden' class from the body
            expect(b.hasClass('menu-hidden')).toBe(true);

        });
    });

    // Test for initial feeds loaded to page...
    describe('Initial Entries', function(){

        // Since the feed is asynchronous it must be loaded before we can test it
        beforeEach(function(done){
            // Randomly load one of the 4 feeds
            loadFeed(Math.floor(Math.random()*4), function(){
                // Let the function know it is done i.e. the feed has loaded and we're ready to move on
                done();
            });
        });

         // Test to make sure that the feed container has atleast 1 entry element within it
        it('have at least a single .entry element within the .feed container', function(){

            // make sure that the entries are defined and that the number of entries returned is  greater than 0.
            expect($('.feed .entry')).toBeDefined();
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
   });


    //Test the feed selections...
    describe('New Feed Selection', function(){
        // Set variables to contain the feeds that will be loaded to compare
        let feed1, feed2;

        // Since the feeds are asynchronous they must be loaded before we can compare them
        beforeEach(function(done){
            // Load the first feed and store the headline from the first entry in a variable
            loadFeed(0, function () {
                feed1 = $('.feed .entry h2').first().text();
            });

            loadFeed(1, function () {
                // Load the second feed and store the headline from the first entry in a variable
                feed2 = $('.feed .entry h2').first().text();
                // Let the beforeEach function know we are done with loading feeds and can move on
                done();
            });
        });

        it('changes the content when a new feed is loaded by the loadFeed function', function(){
            // Compare the first headline to the second headline and make sure they do know match. This way we know the content is changing when a new feed is loading.
            expect(feed1).not.toBe(feed2);
        });

    });

}());
