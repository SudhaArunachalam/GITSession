var interestpage = function(){
		
	var radioButton = element.all(by.model('formData.type'));
	var nextButton = element(by.partialLinkText('Next'));
	
	this.selectRadio = function(index){
		radioButton.get(index).click();
		return this;
		
	}
	
	this.clickNext = function(){
		nextButton.click();
		return require('./paymentPage.js');
		
	}
	
}
module.exports = new interestpage();	