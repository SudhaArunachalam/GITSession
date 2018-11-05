var transTableDetails = function(){
	
		
	var tableData = element.all(by.tagName("tr"));
	var resetButton = element(by.partialButtonText('Reset'));
	var backButton = element(by.partialButtonText('Back'));
	
	
	this.tableValue = function(){
		  	
		tableData.each(function(row,index){
	         row.getText().then(function(text){
	             console.log("\nprint text-------"+text);
	             
	         })
	      
		})
				
	   }
	
	this.reset = function(){
		
		resetButton.click();
		
		return this;
	}
	
this.back = function(){
		
		backButton.click();
		
		return this;
	}
	
	
}
module.exports = new transTableDetails();