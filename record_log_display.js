// JavaScript Document

//     document.write('<li onClick="EraseSingleRecord(' + i + ');" ><a href="#">');
	 // var a = JSON.parse(window.localStorage.getItem("ProgressLog"));
$(function(){	  

	  var wRecArray = [];
	  
	  if ( "ProgressLog" in window.localStorage) {
		  
	  wRecArray = JSON.parse(window.localStorage.getItem("ProgressLog"));
	
	 for(i=0;i<wRecArray.length; i++)
	 {  var newlistelement = document.createElement( "li" )
	 	var name = "item" + String(i);
		//newlistelement.id =name ;
		
	    $('#newlistelement').append('<table width="'+ $(window).width() + 'px" border="0" cellspacing="0" cellpadding="3">');
	//calculate IMC
    var imctext = 10000*parseFloat(wRecArray[i].weight)/(parseFloat(wRecArray[i].height)*parseFloat(wRecArray[i].height));
	imctext=imctext.toFixed(2);
	
	$('#newlistelement').append('<tr>');
	
	//compare and set color for WEIGHT 
	if(i==0){
		
		
	$('#newlistelement').append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].weight +'</span></th>');
	
	}
	else{
		var compare = wRecArray[i-1].weight-wRecArray[i].weight;
		if(compare!=0){
				if (compare >= 0)	
				{
	$('#newlistelement').append('<th width="25%" scope="col" align="center"><span style="color:#ADDA55">'+  wRecArray[i].weight +'</span></th>');
						}else{
	$('#newlistelement').append('<th width="25%" scope="col" align="center"><span style="color:#E51616">'+  wRecArray[i].weight +'</span></th>');				
				}
		}else{
        $('#newlistelement').append('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].weight +'</span></th>');
		}
		
	}
	
	
	//compare and set color for BODYFAT  
	 /* if(i==0){
	$('body').html('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].bodyfat +'</span></th>');
	
	}
	else{
		var compare = wRecArray[i-1].bodyfat-wRecArray[i].bodyfat;
		if(compare!=0){
				if (compare >= 0)	
				{
	$('body').html('<th width="25%" scope="col" align="center"><span style="color:#ADDA55">'+  wRecArray[i].bodyfat +'</span></th>');
						}else{
	$('body').html('<th width="25%" scope="col" align="center"><span style="color:#E51616">'+  wRecArray[i].bodyfat +'</span></th>');				
				}
		}else{
	$('body').html('<th width="25%" scope="col" align="center"><span>'+  wRecArray[i].bodyfat +'</span></th>');
		}
	}*/
	
/*		//PRINT IMC
	$('body').html('<th width="25%" scope="col" align="center">'+  imctext +'</th>');
	
	 
	  //document.write('<th width="25%" scope="col" align="center">'+  wRecArray[i].bodyfat +'</th>');
	$('body').html('<th width="25%" scope="col" align="center">'+ wRecArray[i].day+"/"+wRecArray[i].month+"/"+wRecArray[i].year +'     </th>');
	
	$('body').html('</tr>');  
	$('body').html('</table>');
	$('body').html('</li>');
	
	 }
	  }else{alert("ERROR: No se pudo accesar a la memoria");
	  */
	  
	
	  }
	  $('#listtitle').append(newlistelement);
	  }}); //END jQuery
	 
	  