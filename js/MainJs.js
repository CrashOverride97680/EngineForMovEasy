/*

	JAVASCRIPT FILE DI GESTIONE AVVIO 
	
*/

/*----INIZZIALIZZARE GRANDEZZE ALL'AVVIO----*/

window.onload = function(){
	
	/*Inizializzare-mappa*/
	
		var mappa = document.getElementById("mappa");
	
	/*settaggio parametri mappa*/
		
		mappa.style.width = objmappa.width + "px";
		mappa.style.height = objmappa.height + "px";
	
	/*caricamento-sprite*/
		var sprite = document.getElementById("sprite");
		sprite.style.top = parSprite.posPart + "px";
		sprite.style.left = parSprite.posLarg + "px";
		
}