var data = require('../../data.json');
describe('Calculator Operations', function() {
  it('Addition', function() {

	  browser.get(data.url);
	 //code for Addition
	  element(by.model("first")).sendKeys(data.val1);
	  
	  //select operator---ng-options=value for (key, value) in operators----3 for multiplication in calc page
	  element.all(by.options("value for (key, value) in operators")).then(function(data){
		  data[0].click();
	  });
	  
	//second textbox-- ng-model value is second
	  element(by.model("second")).sendKeys(data.val2);
	  //go Button click--text of button =Go!
	  element(by.buttonText("Go!")).click();
	  
	  element(by.binding("latest")).getText().then(function(text){
		
		  console.log("Result ="+text);
		  
	  });
	  browser.sleep(6000);
	  
  });
  
});