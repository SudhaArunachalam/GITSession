describe('Calculator Operations', function() {
  it('Addition', function() {

	  browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	  //first textbox -- ng-model value is first
	  element(by.model("first")).sendKeys(4);
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(3);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  var actual = element(by.binding("latest")).getText();
	  //check with expected value with jasmine
	  expect(actual).toBe("7");
	  
  });
});