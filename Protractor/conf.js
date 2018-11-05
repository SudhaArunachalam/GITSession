//import stmt for protractor jasmine2-html report
//var jasmineReport = require('protractor-jasmine2-html-reporter');

//import for jasmine allure report
var AllureReporter = require('jasmine-allure-reporter');

// An example configuration file.
exports.config = {
  directConnect: true,

  //in the case of using seleniumAddress we have to open cmd and give the command : webdriver-manager start 
  //and keep cmd open to execute .js files
   //seleniumAddress: 'http://localhost:4444/wd/hub',
  
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    //	shardTestFiles : true,
    //	maxInstances : 2,
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  
 /* suites:{
	  functional:['./src/calculatorEg.js','./src/calculatorEg2.js'],
	  regression:['./src/calcReusableMethod.js']
  },*/
  
 specs: ['./src/PA_Specs/customerLoginSpec.js','./src/PA_Specs/managerLoginSpec.js'],
	
	
 
	 onPrepare: function() {
     
	 //on prepare for protracter jasmine2-html report
//	 jasmine.getEnv().addReporter(
//       new jasmineReport({
//         savePath: 'target/screenshots',
//        	 takeScreenshots: true,
//        	  //takeScreenshotsOnlyOnFailures: true
//        	 	 
//       })
//     );
	 
	 //code for onprepare : jasmine allure report
	 
	 //jasmine.getEnv().addReporter(new AllureReporter({
	    //  resultsDir: './node_modules/jasmine-allure-reporter/allure-results1'
		 jasmine.getEnv().addReporter(new AllureReporter());
	    	  jasmine.getEnv().afterEach(function(done){
	    	      browser.takeScreenshot().then(function (jpg) {
	    	        allure.createAttachment('Screenshot', function () {
	    	          return new Buffer(jpg, 'base64')
	    	        }, 'image/jpg')();
	    	        done();
	    	      })
	    	  });
	    	 // resultsDir: './node_modules/jasmine-allure-reporter/allure-results1'
	    
	 },
	 
/* multiCapabilities : [
	 {
		 'browserName': 'chrome',
		 specs:['./src/calculatorEg.js'],
	 },{
		 'browserName' : 'firefox',
		 specs:['./src/example_spec.js'],
	 }
 ],*/
 
	  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000
  }
};
