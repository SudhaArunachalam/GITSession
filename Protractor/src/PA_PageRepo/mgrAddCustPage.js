var AddCust = function(){
	
	var fName= element(by.model('fName'));
	var lName = element(by.model('lName'));
	var code = element(by.model('postCd'));
	var addButton = element(by.className("btn btn-default"));
	
	this.firstname = function(){
		fName.sendKeys("Jerry");
		return this;
	}
	
	this.lastname = function(){
		lName.sendKeys("Mon");
		return this;
	}
	
	this.postalcode = function(){
		code.sendKeys("333");
		return this;
	}
	
	this.addClick = function(){
		addButton.click();
	}
	
	this.alertDisp = function(){
		browser.switchTo().alert().accept();
	}
	
}
module.exports = new AddCust();