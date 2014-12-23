// JavaScript Document

	
function bmicalc(){
var w =parseFloat( document.getElementById("weight_text").value);
var h = parseFloat(document.getElementById("height_text").value);
h=h/100;
var imc = w/(h*h); 
imc=imc.toFixed(2);
//alert(imc);
//document.getElementById("imc_text").innerHTML="IMC = " + imc;

$( document ).ready(function() {
    console.log( "Print IMC on screen" );

    $('#imc_text').html(null);
    $('#imc_text').append("IMC = " + imc);
});
   
}


		
///////////////////	SAVE RECORDS FUNCTION		
			function SaveDataToLocalStorage()
{   

	//create object here 
	// weightRecord must be an object that includes weight height bodyfat date(dd/mm/yy)
//declare weightRecord
var weightRecord = {"weight":0,"height":0,"bodyfat":0,"day":1,"month":1,"year":1000}; //OBJECT
weightRecord.weight=document.getElementById("weight_text").value;
weightRecord.height=document.getElementById("height_text").value;
weightRecord.bodyfat=document.getElementById("bodyfat_text").value;
//set integer to string month
Fecha = new Date;
switch(Fecha.getMonth()){
	case 1:
	weightRecord.month="Ene"
	break;
	case 2:
	weightRecord.month="Feb"
	break;
	case 3:
	weightRecord.month="Mar"
	break;
	case 4:
	weightRecord.month="Abr"
	break;
	case 5:
	weightRecord.month="May"
	break;
	case 6:
	weightRecord.month="Jun"
	break;
	case 7:
	weightRecord.month="Jul"
	break;
	case 8:
	weightRecord.month="Ago"
	break;
	case 9:
	weightRecord.month="Sep"
	break;
	case 10:
	weightRecord.month="Oct"
	break;
	case 11:
	weightRecord.month="Nov"
	break;
	case 12:
	weightRecord.month="Dic"
	break;
	
	default:
	
	}
weightRecord.day=Fecha.getDate();
//Already done in the SWITCH : weightRecord.month=Fecha.getMonth();
weightRecord.year=Fecha.getFullYear();
//alert(weightRecord.weight + " " + weightRecord.height + " " +weightRecord.bodyfat );

 var wRecArray = [];
   if ( "ProgressLog" in window.localStorage) {
    wRecArray = JSON.parse(window.localStorage.getItem("ProgressLog"));
    // Push the new data (whether it be an object or anything else) onto the array
	wRecArray.push(weightRecord);
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    window.localStorage.setItem('ProgressLog', JSON.stringify(wRecArray));

}
	else{
		wRecArray.push(weightRecord);
		window.localStorage.setItem('ProgressLog',JSON.stringify (wRecArray));
	  //create  Item for Storage and add first object		
	
}




$( document ).ready(function() {

var savebutton = document.getElementById("save_buttonlink");
var imagecheck = document.getElementById("check_image");


$(imagecheck).css("visibility", "visible");
setTimeout(function(){
    $(imagecheck).css("visibility", "hidden");
    
}, 1500);





//$(savebutton).innerHTML("<span style=\"font-size:0.75em\">Guardar</span>");

});



 }




	

///////////////////////ELIMINATE SINGLE RECORD	
	function EraseSingleRecord(index){
		
		var wRecArray = [];
         wRecArray = JSON.parse(window.localStorage.getItem("ProgressLog"));
  		wRecArray.splice(index,1);
		window.localStorage.setItem('ProgressLog', JSON.stringify(wRecArray));
		window.location.reload(true);
	}

	function refreshPage(){
window.location.reload(true);

	}
	

