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
    // var feed1, feed2;
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loop through each feed and make sure the URL is defined and not empty
        it('have a defined URL', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("", '', null);
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // loop through each feed and make sure the name is defined and not empty
        it('have a defined name', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("", '', null);
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         const b = $('body');
         const menuIcon = $('.menu-icon');

        it('is hidden by default', function(){
            expect(b.hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu item is clicked', function(){
            const menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(b.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(b.hasClass('menu-hidden')).toBe(true);

        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            // loadFeed(Math.floor(Math.random()*4));
            loadFeed(Math.floor(Math.random()*4), function(){
                done();
            });
            // const testChildren = $('.feed').children();
            // console.log(testChildren);

            // done();
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('have at least a single .entry element within the .feed container', function(){
            // const testfeed = $('.feed');
            // let ent = testfeed.querySelectorAll('.entry');

            // console.log(testfeed);
            // console.log(ent + "ENT");

            // var feedChildren = testfeed.children;
            // var article = document.querySelector('.entry');

            // var entries = [];
            expect($('.feed .entry')).toBeDefined();
            expect($('.feed .entry').length).toBeGreaterThan(0);
            console.log($('.entry .feed'));
            console.log($('.feed .entry').length);

            // for(var i = 0; i < feedChildren.length; i++){
            //     entries.push(feedChildren[i]);
            // }

            // console.log(feedChildren);
            // console.log(article);
            // done();
         });
   });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
    var feed1, feed2;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         // var feed1, feed2;

        beforeEach(function(done){

    loadFeed(0, function () {
        feed1 = $('.feed .entry h2').first().text();
    });
    $('.feed').empty();
    loadFeed(1, function () {
        feed2 = $('.feed .entry h2').first().text();
        done();
    });

});

        it('changes the content when a new feed is loaded by the loadFeed function', function(){
            //var feed0 = document.querySelector('.feed');

            // waitsFor(function(){
            //     return
            // });

            console.log(feed1);
            console.log(feed2);

            //expect(feed1).not.toEqual(feed2);
                expect(feed1).not.toBe(feed2);

        });
    });

}());
