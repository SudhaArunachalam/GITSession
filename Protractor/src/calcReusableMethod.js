
//Reusable method for addition
var calc=function(a,b,operator)
{
	element(by.model("first")).sendKeys(a);
	  
	  //select operator---ng-options=value for (key, value) in operators----3 for multiplication in calc page
	  element.all(by.options("value for (key, value) in operators")).then(function(data){
		  data[operator].click();
	  });
	  
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(b);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  
	  
}

describe('Calculator Operations', function() {
  it('Addition', function() {

	  browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	 calc(10,10,0);
	 calc(10,2,1);
	  browser.sleep(5000);
  });
});