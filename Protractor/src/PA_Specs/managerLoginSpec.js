var data = require(process.cwd() +'/src/PA_Util/dataRepo.json')
var home = require(process.cwd() +'/src/PA_PageRepo/homePage.js')
var mgrhome = require(process.cwd() +'/src/PA_PageRepo/managerAccPage.js')
describe('Bank Automation Page',function(){
	
beforeEach(function(){
		
	browser.get(data.url);
		
	});


	it('Manager login  page',function(){
		
		
		var mpage = home.bmLogin();
		browser.sleep(4000);
		
		//Add Customer activities
		var detail = mpage.addcustomer();
		browser.sleep(3000);
		
		detail.firstname();
		detail.lastname();
		detail.postalcode();
		browser.sleep(4000);
		detail.addClick();
		browser.sleep(4000);
		detail.alertDisp();
		browser.sleep(4000);
		
		//Open Account Activities
		var accpg = mpage.openacc();
		browser.sleep(4000);
		
		accpg.customer(2);
		browser.sleep(3000);
		
		accpg.curr(1);
		//console.log(accpg.curr(1));
		browser.sleep(2000);
		
		
		
		accpg.process();
		browser.sleep(4000);
		
		accpg.alertDisp();
		browser.sleep(3000);
		
		
		//acc for pound
		var accpg = mpage.openacc();
		browser.sleep(4000);
		
		accpg.customer(4);
		browser.sleep(3000);
		
		accpg.curr(2);
		//console.log(accpg.curr(1));
		browser.sleep(2000);
		
		
		
		accpg.process();
		browser.sleep(4000);
		
		accpg.alertDisp();
		browser.sleep(3000);
		
		//acc for rupees
		var accpg = mpage.openacc();
		browser.sleep(2000);
		
		accpg.customer(1);
		browser.sleep(2000);
		
		accpg.curr(3);
		//console.log(accpg.curr(1));
		browser.sleep(2000);
		
		
		
		accpg.process();
		browser.sleep(4000);
		
		accpg.alertDisp();
		browser.sleep(3000);
		
		//Cutomer button activities
		var custpage = mpage.cust();
		custpage.searchText(data.sname);
		browser.sleep(3000);
		
		custpage.deleteButton();
		browser.sleep(3000);
		
	});
});

