let homepage = function(){ // homepage is variable name

    let firstNumber_input = element(by.model('first')); // identifying objects and storing in a variable
    let secondNumber_input = element(by.model('second')); 
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){ // actions performed 
        browser.get(url);
    };

    this.enterFirstNum = function(firstNum){
     firstNumber_input.sendKeys(firstNum); 
    };

    this.enterSecondNum = function(secondNum){
        secondNumber_input.sendKeys(secondNum);
    };

    this.clickGo =  function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result)); 
        expect (output.getText()).toEqual(result);
    };
};

module.exports = new homepage(); // allowing this homepage file to be used by any other files
