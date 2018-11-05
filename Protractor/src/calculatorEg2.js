describe('Calculator Operations', function() {
  it('Multiplication', function() {

	  browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	  //first textbox -- ng-model value is first
	  element(by.model("first")).sendKeys(4);
	  
	  //select operator---ng-options=value for (key, value) in operators----3 for multiplication in calc page
	  element.all(by.options("value for (key, value) in operators")).then(function(data){
		  data[3].click();
	  });
	  
	  
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(3);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  
	  //line number 17 can b replaced with line no 19 also with partialbuttontext locator as
	 // element(by.partialButtonText("Go")).click();
	  
	  
	  
	  var actual = element(by.binding("latest")).getText();
	  //check with expected value with jasmine
	  expect(actual).toBe("12");
	  //not.to---will chk for false condition
	  //expect(actual).not.toBe("12");
	  
  });
});