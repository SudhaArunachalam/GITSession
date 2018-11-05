var custDelete = function(){

	var search = element(by.model("searchCustomer"));
	
	var delButton = element(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer').row(0)).element(by.partialButtonText("Delete"));

	
	
	this.searchText = function(sname){
		search.sendKeys(sname);
		this.return;
		
	}
	
	this .deleteButton = function(){
		delButton.click();
		return this;
	}
	
	
}
module.exports = new custDelete();
