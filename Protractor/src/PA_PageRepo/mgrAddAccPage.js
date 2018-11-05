var AddAccount = function(){
	
	var cust = element.all(by.repeater("cust in Customers"));
	var currency = element.all(by.model("currency"))
					 .all(by.tagName('option'));
					 
		
	var processButton = element(by.partialButtonText("Process"));
	
	this.customer = function(index){
		cust.get(index).click();
		return this;
	}
	
	this.curr = function(index){
		currency.get(index).click(); 
			return this;
	}
	
	this.alertDisp = function(){
		browser.switchTo().alert().accept();
	}
	
	this.process = function(){
		
		processButton.click();
		return this;
	}
	
}
module.exports = new AddAccount();