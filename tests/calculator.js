
// Change the path in conf.js file ,specs: ['../tests/calculator.js']

let homepage = require('../pages/homepage'); // importing from homepage file

describe('demo calculator test', function(){ // takes 2 parameters-string and function

it ('addition test', function(){ // it is a test cases

//browser.get('http://juliemr.github.io/protractor-demo/'); //launching the browser
homepage.get('http://juliemr.github.io/protractor-demo/');

//element(by.model('first')).sendKeys('5'); //pass the value in textbox. model is a angular locator
homepage.enterFirstNum('6');

//element(by.model('second')).sendKeys('5'); //pass the value in textbox.
homepage.enterSecondNum('6');

//element(by.css('[ng-click="doAddition()"]')).click(); //to click, use this css syntax
homepage.clickGo();

//let result = element(by.cssContainingText('.ng-binding','10')); // cssContainingText is used to get the text. let or var,both are same
//expect (result.getText()).toEqual('10'); // assertion is done in expect
homepage.verifyResult('12');

browser.sleep(2000) // wait for 2ms
});

it ('subtraction test', function(){ 

    homepage.get('http://juliemr.github.io/protractor-demo/');
    
    homepage.enterFirstNum('6');
    
    homepage.enterSecondNum('6');
    
    homepage.clickGo1();
    
    homepage.verifyResult('12');
    
    browser.sleep(2000) 
    });
});
