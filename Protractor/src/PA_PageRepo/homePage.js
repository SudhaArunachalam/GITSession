var data = require(process.cwd() +'/src/PA_Util/dataRepo.json')
var homepg = function(){
	
	var custLogin = element(by.partialButtonText('Customer'));
	var bankMgrLogin = element(by.partialButtonText('Bank Manager'));
	browser.sleep(4000);
	
	this.customer = function(){
		custLogin.click();
		return require('./custLoginPage.js')
		
	}
	
	this.bmLogin = function(){
		bankMgrLogin.click();
		return require('./managerAccPage.js')
		
	}
	
}
module.exports = new homepg(); 
