var data = require(process.cwd() +'/src/utility/multiformData.json')
var profile = require(process.cwd() +'/src/pageRepo/profilePage.js')
describe('E2E automation',function(){
	it('e2e flow',function(){
		browser.get(data.url);
		profile.enterName();
		profile.enterEmail();
		var interest = profile.clickNext();
		
		interest.selectRadio(1);
		browser.sleep(3000);
		var payment = interest.clickNext();
		
		browser.sleep(4000)
		payment.submit();
		browser.sleep(4000)
		payment.alertDisp();
		
		
	});
		
});
