var data = require(process.cwd() +'/src/PA_Util/dataRepo.json')
var home = require(process.cwd() +'/src/PA_PageRepo/homePage.js')

describe('Bank Automation',function(){
	
beforeEach(function(){
		
	browser.get(data.url);
		
	});

	it('Customer page',function(){
		
		
		browser.sleep(3000);
		//TC : Login page
		var c = home.customer();
		browser.sleep(4000);
		c.cust(1);
		
		var acct = c.login();
	
		//TC :verify currency type
		acct.account(0);
		console.log("account No :1004 and currency = dollar");
		
		browser.sleep(4000);
		
		acct.account(1);
		console.log("account No :1005 and currency = Pounds");
		browser.sleep(3000);
		
		acct.account(2);
		console.log("account No :1006 and currency = Rupees");
		 browser.sleep(3000);

	
		 //TC :verify Transaction Page as empty
		acct.account(0);
		 acct.transaction();
		
		 
		browser.sleep(4000);
});
	
	it('Deposit amount',function(){
		
		//TC : Login page
		var c = home.customer();
		browser.sleep(4000);
		c.cust(1);
		
		var acct = c.login();
		
		acct.account(2);
		console.log("account No :1006 and currency = Rupees");
		 browser.sleep(3000);
		 
		 acct.deposit();
		 browser.sleep(3000);
		 acct.amount(data.amt);
		 acct.depoButtonClick();
		 browser.sleep(6000);
	});
	
	
	it('Transaction check',function(){
		
		//TC : Login page
		var c = home.customer();
		browser.sleep(4000);
		c.cust(1);
		
		var acct = c.login();
		
		acct.account(2);
		//console.log("account No :1006 and currency = Rupees");
		 browser.sleep(3000);
		 
		var tableVal = acct.transaction1();
		browser.sleep(4000);
		
		tableVal.tableValue();
		browser.sleep(3000);
		
		
	});
	
	it('Withdraw Error',function(){
		
		var c = home.customer();
		browser.sleep(4000);
		c.cust(1);
		
		var acct = c.login();
		
		acct.account(2);
		//console.log("account No :1006 and currency = Rupees");
		 browser.sleep(3000);
		
		acct.withdrawClick(data.amt1);
		browser.sleep(7000);
		
				
		
	});
	
	it('Withdraw Success',function(){
		
		var c = home.customer();
		browser.sleep(4000);
		c.cust(1);
		
		var acct = c.login();
		
		acct.account(2);
		
		 browser.sleep(3000);
		
		acct.withdrawClick(data.amt2);
		browser.sleep(7000);
		
	
	
});
	
	it('Transaction after Withdraw',function(){
		
		//TC : Login page
		var c = home.customer();
		browser.sleep(4000);
		c.cust(1);
		
		var acct = c.login();
		
		acct.account(2);
		//console.log("account No :1006 and currency = Rupees");
		 browser.sleep(3000);
		 
		var tableVal = acct.transaction1();
		browser.sleep(4000);
		
		//tableVal.tableValue();
		//browser.sleep(3000);
		
		
	});
	
	it('Transaction Reset',function(){
	
	//TC : Login page
	var c = home.customer();
	browser.sleep(4000);
	c.cust(1);
	
	var acct = c.login();
	
	acct.account(2);
	//console.log("account No :1006 and currency = Rupees");
	 browser.sleep(3000);
	 
	var tableVal = acct.transaction1();
	browser.sleep(4000);
	
	tableVal.reset();
	//tableVal.tableValue();
	browser.sleep(5000);
	tableVal.back();
	browser.sleep(3000);
	//acct.logout();
	//Browser.sleep(4000);
	
});

it('logout',function(){
	
	
	var c = home.customer();
	browser.sleep(4000);
	c.cust(1);
	
	var acct = c.login();
	
	 browser.sleep(3000);
	 
	acct.logout();
	browser.sleep(5000);


});
	
});