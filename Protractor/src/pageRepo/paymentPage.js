var paymentpage = function(){
	
	var submitButton = element(by.partialButtonText('Submit'));
	
	this.submit = function(){
		submitButton.click();
		
	}
	
	this.alertDisp = function(){
		browser.switchTo().alert().accept();
	}
}
module.exports = new paymentpage();