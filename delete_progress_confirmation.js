function delete_confirmation() {

	
$( document ).ready(function() {
var newdiv = document.createElement("div")
var newbuttondiv = document.createElement("div")
var aceptarButton = document.createElement("button");
var cancelarButton = document.createElement("button");
$(newdiv).append('<h2>Se borraran todos los registros del dispositivo </h2>');

newdiv.style.backgroundColor = "#000000";
newbuttondiv.align="center";

$(aceptarButton).width($(window).width*0.50);
$(aceptarButton).html("<h3>Aceptar</h3>");
$(aceptarButton).click(function() {
  if ( "ProgressLog" in window.localStorage) {

    localStorage.removeItem('ProgressLog');

  
 $(newdiv).html("<h3>Todos los datos han sido eliminados</h3>");
}
	else{
		
 $(newdiv).html("<h3>No hay registros guardados</h3>");
}
 $(newdiv).fadeOut(2000);

});



$(cancelarButton).html("<h3>Cancelar</h3>");
$(cancelarButton).click(function() {
 // Do nothing and remove newdiv
 $(newdiv).fadeOut(2000);
});



$(newbuttondiv).append(aceptarButton,cancelarButton);
$(newdiv).append(newbuttondiv);

$("#div_savebuttons").append(newdiv);

});

}

