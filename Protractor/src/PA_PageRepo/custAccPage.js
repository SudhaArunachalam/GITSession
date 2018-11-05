var custAccount = function(){
	
	var accNo = element.all(by.options("account for account in Accounts"));
	var transButton = element(by.partialButtonText('Transaction'));
	var depositButton = element(by.partialButtonText('Deposit'));
	var depositAmt = element(by.model('amount'));
	var depoButton = element(by.className('btn btn-default'));
	var transButton1 = element(by.partialButtonText('Transaction'));
	var withdrawButton = element(by.partialButtonText('Withdrawl'));
	var withdrawButton1 = element(by.className('btn btn-default'));
	var logoutButton = element(by.partialButtonText('Logout'));
	
	
	
	this.account = function(index){
		accNo.get(index).click();
		return this;
		
	}
	this.transaction = function(){
		
		transButton.click();
		return require('./custTransactionPage.js');
	}
	
	this.deposit = function(){
		
		depositButton.click();
		//return  require('./custDepositPage.js');
		return this;
	}

   this.amount = function(amt){
	   
	   depositAmt.sendKeys(amt);
	   depositButton.click();
   }
   
   this.depoButtonClick = function(){
		
		depoButton.click();
		//return  require('./custDepositPage.js');
		return this;
	}
   
   this.transaction1 = function(){
		
		transButton1.click();
		return require('./custTransTablePage.js');
	}

   this.withdrawClick = function(amt){
		
		withdrawButton.click();
		depositAmt.sendKeys(amt);
		withdrawButton1.click();
		return this;
	}

   this.logout = function(){
		
		logoutButton.click();
		
		return this;
	}


}
module.exports = new custAccount();