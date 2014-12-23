// JavaScript Document
$(function(){	  

	  var wRecArray = [];
	  
	  
		  
	  wRecArray = JSON.parse(window.localStorage.getItem("ProgressLog"));
	
	var name = null;
	var newlistelement = document.createElement( "li" );
	var newtable = document.createElement("table");
	
	 for(i=0;i<wRecArray.length; i++)
	 {  
	 	name = "item" + String(i);
		newlistelement.id = name ;
		newlistelement.width = $(window).width;
		newtable.width= $(window).width;
		newtable.border=0;
		newtable.cellspacing=0;
		newtable.cellpadding=3;
		
	  
	//calculate IMC
    var imctext = 10000*parseFloat(wRecArray[i].weight)/(parseFloat(wRecArray[i].height)*parseFloat(wRecArray[i].height));
	imctext=imctext.toFixed(2);
	
	$(newtable).append('<tr>');
	
	//compare and set color for WEIGHT 
	if(i==0){
		
		
	$(newtable).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].weight +'</span></th>');
	
	}
	else{
		var compare = wRecArray[i-1].weight-wRecArray[i].weight;
		if(compare!=0){
				if (compare >= 0)	
				{
	$(newtable).append('<th width="25%" scope="col" align="center"><span style="color:#ADDA55">'+  wRecArray[i].weight +'</span></th>');
						}else{
	$(newtable).append('<th width="25%" scope="col" align="center"><span style="color:#E51616">'+  wRecArray[i].weight +'</span></th>');				
				}
		}else{
        $(newtable).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].weight +'</span></th>');
		}
		
	}
	

	//compare and set color for BODYFAT

	//compare and set color for WEIGHT 
	if(i==0){
		
		
	$(newtable).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].bodyfat +'</span></th>');
	
	}
	else{
		var compare = wRecArray[i-1].bodyfat-wRecArray[i].bodyfat;
		if(compare!=0){
				if (compare >= 0)	
				{
	$(newtable).append('<th width="25%" scope="col" align="center"><span style="color:#ADDA55">'+  wRecArray[i].bodyfat +'</span></th>');
						}else{
	$(newtable).append('<th width="25%" scope="col" align="center"><span style="color:#E51616">'+  wRecArray[i].bodyfat +'</span></th>');				
				}
		}else{
        $(newtable).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].bodyfat +'</span></th>');
		}
		
	}

		
	//PRINT IMC
	$(newtable).append('<th width="25%" scope="col" align="center">'+  imctext +'</th>');
	
	 
	  //document.write('<th width="25%" scope="col" align="center">'+  wRecArray[i].bodyfat +'</th>');
	$(newtable).append('<th width="25%" scope="col" align="center">'+ wRecArray[i].day+"/"+wRecArray[i].month+"/"+wRecArray[i].year +'     </th>');
	
	$(newtable).append('</tr>');  
	
//append everything

	
	 $(newlistelement).append(newtable);
	
	
	 $("#listtitle").append(newlistelement);  

     newlistelement = document.createElement( "li" );
    newtable = document.createElement( "table" );

} //end for 
	

	  }); //END jQuery
	 
	  function DeletePopupDialog(k){
		
		
		var el = document.createElement("li");
		var content = document.createTextNode(" It works = " + String(k));    
			
			el.appendChild(content); 
			
		var name = "item"+String(k);
		alert(name);	
		listitem= document.getElementById(name);
	//document.write('<div data-role="popup" id="popupDialog" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:400px;"></div>');
  
listitem.parentNode.insertBefore(el);  
//document.listitem.appendChild(el);
		
			
		}