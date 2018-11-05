var data = require(process.cwd() +'/src/utility/multiformData.json')
var profilepage = function(){
	
	var name = element(by.model('formData.name'));
	var email = element(by.model('formData.email'));
	var clickNext = element(by.partialLinkText('Next'));
	
	this.enterName = function(){
		name.sendKeys(data.userdata.name);
		return this;
		
	}
	
	this.enterEmail = function(){
		email.sendKeys(data.userdata.email);
		return this;
		
	}
	
	this.clickNext = function(){
		clickNext.click();
		return require('./interestPage.js');
		
	}
}

module.exports = new profilepage(); 
	