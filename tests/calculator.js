let homepage = require('../pages/homepage');

describe('demo calculator', function() {

    it('addition test ', function() {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('5');

        // element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('5');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '5'));

        // expect(result.getText()).toEqual('5');
        homepage.verifyResult('10');


        browser.sleep(4000)

    });

    it('subtraction test ', function() {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('5');

        // element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('5');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGol();

        // let result = element(by.cssContainingText('.ng-binding', '5'));

        // expect(result.getText()).toEqual('5');
        homepage.verifyResult('10');


        browser.sleep(4000)

    });

    it('addition test ', function() {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('5');

        // element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('5');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '5'));

        // expect(result.getText()).toEqual('5');
        homepage.verifyResult('10');


        browser.sleep(4000)

    });

    it('subtraction test ', function() {


        homepage.get('http://juliemr.github.io/protractor-demo/');


        homepage.enterFirstNumber('5');


        homepage.enterSecondNumber('5');


        homepage.clickGol();



        homepage.verifyResult('10');


        browser.sleep(5000)

    });

});