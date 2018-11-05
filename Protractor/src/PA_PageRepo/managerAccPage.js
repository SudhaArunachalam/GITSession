var mgrAccount = function(){
	
	var addCust = element(by.partialButtonText('Add Customer'));
	var openAcc = element(by.partialButtonText('Open Account'));
	var customer = element(by.partialButtonText('Customers'));
	
	
	this.addcustomer = function(){
		addCust.click();
		return require('./mgrAddCustPage.js');
	
	}
	
	this.openacc = function(){
		openAcc.click();
		return require('./mgrAddAccPage.js');
			
	}
	
	this.cust = function(){
		customer.click();
		return require('./mgrCustDeletePage.js');;
	
	}
	
	}
module.exports = new mgrAccount();