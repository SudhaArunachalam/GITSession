var XLSX = require('xlsx');
describe('data driven testing',function(){
	//reading sheet1 A1 value.......which is sudha
   it('Reading cell val',function(){
	   
   
	var workbook=XLSX.readFile('./testdata.xlsx');
	var sheet=workbook.SheetNames[0];
	var worksheet=	workbook.Sheets[sheet];
	var cell=worksheet['A1'];
	var result=cell.v;
	
	console.log('Data in cell A1='+result);
	
});

   it('Writing cell val',function(){
	   
	   
		var workbook=XLSX.readFile('./testdata.xlsx');
		var sheet=workbook.SheetNames[0];
		var worksheet=	workbook.Sheets[sheet];
		var cell=worksheet['A1'];
		var result=cell.v;
		
		//console.log('Data in cell A1='+result);
		worksheet['A1'].v="sudha arunachalam";
		console.log('Data in cell A1='+result);
		XLSX.writeFile(workbook,'./testdata.xlsx');//in case want to put the updated data ,we can give new file name too
		
	});
   
   it('Reading all data',function(){
	   
	   var workbook=XLSX.readFile('./testdata.xlsx');
	   var allSheetNames=workbook.SheetNames;
	   
	   allSheetNames.forEach(function(sheetName){
		   var sheet=workbook.Sheets[sheetName];
	   for(cells in sheet)
		   {
		   if (cells[0]=== '!')
			   continue;
		   console.log(sheetName + "and" + cells + "data = " + sheet[cells].v);
		   
		   }
	   
	   });
   });
   
   
});
