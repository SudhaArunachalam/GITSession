describe("Multiform Page",function(){
	it("E2E Flow",function(){
		//profile page 
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
		element(by.model('formData.name')).sendKeys('sudha');
		element(by.model('formData.email')).sendKeys('s@gmail.com');
		element(by.partialLinkText('Next')).click();
		browser.sleep(4000);
		//Interests page
		element.all(by.model('formData.type')).get(1).click();
		element(by.partialLinkText('Next')).click();
		browser.sleep(4000);
		
		//Payment page
		element(by.partialButtonText('Submit')).click();
		
		//handle alert
		browser.switchTo().alert().accept();
		browser.sleep(5000);
		
	});

	
});


