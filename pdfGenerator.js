/**
 * Created by BALASUBRAMANIAM on 30-03-2017.
 */
var phantom = require('phantom');

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        page.open("https://www.amazon.in/Womens-clothing/b/ref=nav_shopall_sbc_wfashion_clothing?ie=UTF8&node=1953602031").then(function(status) {
            page.render('githubscreen.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});