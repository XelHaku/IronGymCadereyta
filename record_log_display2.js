// JavaScript Document
$(function(){	  

	  var wRecArray = [];
	  
	  //<ul id="listtitle" data-role="listview">
    
		  
	  wRecArray = JSON.parse(window.localStorage.getItem("ProgressLog"));
	
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

		name[i] = null;
		
		
		newlink[i] = document.createElement("a");
	 	
		newtable[i] = document.createElement("table");
		newtable[i].style.width= "100%";
		newtable[i].border=0;
		newtable[i].cellspacing=2;
		newtable[i].cellpadding=0;
		
/////////////////////////////
	//calculate IMC
    var imctext = 10000*parseFloat(wRecArray[i].weight)/(parseFloat(wRecArray[i].height)*parseFloat(wRecArray[i].height));
	imctext=imctext.toFixed(2);
	
	$(newtable[i]).append('<tr>');
	
	//compare and set color for WEIGHT 
	if(i==0){
		
		
	$(newtable[i]).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].weight +'</span></th>');
	
	}
	else{
		var compare = wRecArray[i-1].weight-wRecArray[i].weight;
		if(compare!=0){
				if (compare >= 0)	
				{
	$(newtable[i]).append('<th width="25%" scope="col" align="center"><span style="color:#ADDA55">'+  wRecArray[i].weight +'</span></th>');
						}else{
	$(newtable[i]).append('<th width="25%" scope="col" align="center"><span style="color:#E51616">'+  wRecArray[i].weight +'</span></th>');				
				}
		}else{
        $(newtable)[i].append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].weight +'</span></th>');
		}
		
	}
	

	//compare and set color for BODYFAT
	if(i==0){
		
		
	$(newtable[i]).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].bodyfat +'</span></th>');
	
	}
	else{
		var compare = wRecArray[i-1].bodyfat-wRecArray[i].bodyfat;
		if(compare!=0){
				if (compare >= 0)	
				{
	$(newtable[i]).append('<th width="25%" scope="col" align="center"><span style="color:#ADDA55">'+  wRecArray[i].bodyfat +'</span></th>');
						}else{
	$(newtable[i]).append('<th width="25%" scope="col" align="center"><span style="color:#E51616">'+  wRecArray[i].bodyfat +'</span></th>');				
				}
		}else{
        $(newtable[i]).append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].bodyfat +'</span></th>');
		}
		
	}

		
	//PRINT IMC
	$(newtable[i]).append('<th width="25%" scope="col" align="center">'+  imctext +'</th>');
		 
	$(newtable[i]).append('<th width="25%" scope="col" align="center">'+ wRecArray[i].day+"/"+wRecArray[i].month+"/"+wRecArray[i].year +'     </th>');
	
	$(newtable[i]).append('</tr>');  






/////////////////////////////			
	
	
//append everything
    $(newlink[i]).append(newtable[i]);
    $(newlistelement[i]).append(newlink[i]);

	$('#recordloglist').append(newlistelement[i]);  
	$('#recordloglist').listview('refresh');
	

} //end for 


	

	  }); //END jQuery
	 
	 