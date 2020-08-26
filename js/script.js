// 3- Creare un array di oggetti di studenti.

// 4-Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

// 5- Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery.

// 6- BONUS: Provate ad utilizzare Handlebars.

$(document).ready(function(){
    // 1- Creare un oggetto che descriva uno studente con le seguenti
    // proprietà: nome, cognome ed età.
    var studente = {
		"nome": 'Michele',
		"cognome": 'Anghileri',
		"eta": 23
	}

    // 2- Stampare a schermo attraverso il for in tutte le proprietà.

	for (var key in studente){
		console.log(`${key}: ${studente[key]}`);
	}
});
