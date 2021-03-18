// Chidedi nome utente
var nomeUtente = prompt( 'Come ti chiami?' );
console.log( nomeUtente );

// Chiedi cognome utente
var cognomeUtente = prompt( 'Quale è il tuo cognome?' );
console.log( cognomeUtente );

// Chiedi colore preferito
var colorePreferito = prompt( 'Quale è il tuo colore preferito?' );
console.log( colorePreferito );

// Tre domande
var treDomande = nomeUtente + cognomeUtente + colorePreferito + 21;
console.log( treDomande );

// Views sulla pagina
document.getElementById( 'page-views' ).innerHTML = treDomande;
