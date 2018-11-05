describe('Calculator Operations', function() {
  it('Addition', function() {

	  browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	 //code for Addition
	  element(by.model("first")).sendKeys(4);
	  
	  //select operator---ng-options=value for (key, value) in operators----3 for multiplication in calc page
	  element.all(by.options("value for (key, value) in operators")).then(function(data){
		  data[0].click();
	  });
	  
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(3);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  
	  
	  
	  //code for division
	  element(by.model("first")).sendKeys(4);
	  
	  //select operator---ng-options=value for (key, value) in operators----3 for multiplication in calc page
	  element.all(by.options("value for (key, value) in operators")).then(function(data){
		  data[1].click();
	  });
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(2);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  
	  
	  //code for modulus
	  element(by.model("first")).sendKeys(4);
	  
	  //select operator---ng-options=value for (key, value) in operators----3 for multiplication in calc page
	  element.all(by.options("value for (key, value) in operators")).then(function(data){
		  data[2].click();
	  });
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(3);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  browser.sleep(8000);
  });
});