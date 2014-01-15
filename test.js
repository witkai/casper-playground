
phantom.injectJs('chance.min.js');
var casper = require('casper').create();

casper.start("http://google.com/", function() {
    this.echo('random: ' + chance.phone());
});

casper.run();