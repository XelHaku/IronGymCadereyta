// JavaScript Document
$(function(){	  

	  var wRecArray = [];
	  
	  //<ul id="listtitle" data-role="listview">
    
		  
	  wRecArray = JSON.parse(window.localStorage.getItem("ProgressLog"));
	var newUlist = document.createElement("ul");
	var name = [];
	var newlistelement = [];
	var newtable = [];
	var newlink = [];
	
	 for(i=0;i<wRecArray.length; i++)
	 	 {  

		
		newlistelement[i] = document.createElement( "li" );
		newlink[i] = document.createElement("a");
		name[i] = "item" + String(i);
		$(newlistelement[i]).id = name[i] ;
		$(newlistelement[i]).text(""+name[i]);
		
			
	
	
//append everything
       
    $(newlistelement[i]).append(newlink[i]);

	$(newUlist).append(newlistelement[i]);  
	
	$("#bottomTitle").append(newUlist);  //alert("end"+i);
    

} //end for 


	

	  }); //END jQuery
	 
	 