var custLogin = function(){
	

var custId = element.all(by.repeater("cust in Customers"));
var loginButton = element(by.partialButtonText('Login'));

this.cust = function(index){
	
	custId.get(index).click();
	browser.sleep(4000);
	return this;
}

this.login = function(){
	loginButton.click();
	return require('./custAccPage.js');
}
}
module.exports = new custLogin();