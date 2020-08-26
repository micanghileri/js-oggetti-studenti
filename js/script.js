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

    // 3- Creare un array di oggetti di studenti.

    var studentiClasse = [
        {
            "nome": 'Michele',
            "cognome": 'Anghileri',
            "eta": 23
        },
        {
            "nome": 'Robin',
            "cognome": 'Hood',
            "eta": 30
        },
        {
            "nome": 'Christopher',
            "cognome": 'McCandless',
            "eta": 23
        },
        {
            "nome": 'Ascanio',
            "cognome": 'Celestini',
            "eta": 48
        },
        {
            "nome": 'Aboubakar',
            "cognome": 'Soumahoro',
            "eta": 40
        },
        {
            "nome": 'Maso',
            "cognome": 'Notarianni',
            "eta": 53
        }
    ]

    // 4-Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

    for (var i = 0; i < studentiClasse.length; i++){
        for (var key in studentiClasse[i]) {
            console.log(`${key}: ${studentiClasse[i][key]}`);
        }
    }

    // 5- Dare la possibilità all’utente attraverso 3 prompt di aggiungere
    // un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    // Usate prima i console.log e poi provare a stampare con jQuery.

    var nomeStudente = prompt("Inserisci il nome dello studente: ");
	var cognomeStudente = prompt("Inserisci il cognome dello studente: ");
	var etaStudente = parseInt(prompt("Inserisci l'età dello studente: "));

    // for (var i = 0; i < studentiClasse.length; i++){
    //     for (var key in studentiClasse[i]) {
    //         console.log(`${key}: ${studentiClasse[i][key]}`);
    //     }
    // }

    var nuovoStudente = {
        "nome": nomeStudente,
        "cognome": cognomeStudente,
        "eta": etaStudente
    }

    studentiClasse.push(nuovoStudente);

    for (var i = 0; i < studentiClasse.length; i++){
        for (var key in studentiClasse[i]){
            $("#lista-studenti").append('<li>' + key + ': ' + studentiClasse[i][key] + '</li>');
        }
    }
});
