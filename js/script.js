// Chidedi nome utente
var nomeUtente = prompt( 'Come ti chiami?' );
console.log( nomeUtente );

// Chiedi cognome utente
var cognomeUtente = prompt( 'Quale è il tuo cognome?' );
console.log( cognomeUtente );

// Chiedi colore preferito
var colorePreferito = prompt( 'Quale è il tuo colore preferito?' );
console.log( colorePreferito );

var treDomande = nomeUtente + cognomeUtente + colorePreferito + 21;

// Views sulla pagina
document.writeln( treDomande );