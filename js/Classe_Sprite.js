/*

		CLASSE UTILIZZATA PER GESTIRE QUELLO CHE E' L'OGGETTO SPRITE 

*/

/*--Creazione-Parametri-Sprite-*/

	var parSprite = {
		posPart:510,
		posLarg:20
	};

/*--EVENTI-TASTIERA--*/

document.onkeypress = function(event){
		var key = event.key;
		console.log(key);
		console.log(parSprite.posPart);
			if (key == "w"){
					if(parSprite.posPart == 90){
						sprite.style.top = parSprite.posPart -= 0;
					}
					else{
						sprite.style.top = (parSprite.posPart-= 10) + "px";
					}
			}
			if (key == "d"){
				if(parSprite.posLarg == 460){
					sprite.style.left = (parSprite.posLarg+= 0) + "px";
				}
				else{
					sprite.style.left = (parSprite.posLarg+= 10) + "px";
					//console.log("PosY"+parSprite.posLarg);
				}
			}
			if (key == "a"){
				if(parSprite.posLarg == 20){
					sprite.style.left = (parSprite.posLarg+= 0) + "px";
				}
				else{
					sprite.style.left = (parSprite.posLarg-= 10) + "px";
					//console.log("PosY"+parSprite.posLarg);
				}
			}
			if (key == "s"){
				if(parSprite.posPart == 510){
					sprite.style.top = (parSprite.posPart+= 0) + "px";
				}
				else{
					sprite.style.top = (parSprite.posPart+= 10) + "px";
					//console.log("PosY"+parSprite.posLarg);
				}
			}
		
}



/*-----------FINE--------------*/