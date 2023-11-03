const translations = {
    it: {
        'gestione-tecnici-label': 'Gestione Tecnici - Lista Oggetti da Riparare',
        'login-tecnici': 'LOGIN TECNICI',
        'stato': 'Prodotto',
        'azioni': 'Azioni',
        'idseriale': 'Id seriale',
        'tipointervento': 'Nome Utente',
        'inavanzamento': 'In avanzamento',
        'completato' : 'Completato',
        'inviodati' : 'Invio dati'
    },
    en: {
        'gestione-tecnici-label': 'Technician Management - List of Items to Repair',
        'login-tecnici': 'TECHNICIAN LOGIN',
        'stato': 'Product',
        'azioni': 'actions',
        'idseriale': 'Id series',
        'tipointervento': 'Name User',
        'inavanzamento': 'in progress',
        'completato' : 'Completed',
        'inviodati' :'Data sending'
    },
};

const languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;

    // Seleziona tutti gli elementi HTML che desideri tradurre
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    // Per ogni elemento, ottieni l'attributo data-translate
    // e aggiorna il testo con la traduzione appropriata
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute('data-translate');
        const translation = translations[selectedLanguage][key];
        if (translation) {
            element.textContent = translation;
        }
    });
});

//riceve dati dalla pagina precedente
const params = new URLSearchParams(window.location.search);
const testoCodificato = params.get("testo");
const testoDecodificato = decodeURIComponent(testoCodificato);

var nomeDecod  = testoDecodificato;
var arrayTesto = nomeDecod.split("@");

var arr = [];

var oggetto = { 
    nome : "",
    prodotto: ""
};

arr.nome = arrayTesto[0];
arr.prodotto = arrayTesto[1];


//creiamo righe per tabella
var riga = document.createElement("tr");


var colonnaNome = document.createElement("td");
var colonnaProdotto = document.createElement("td");
var colonnaIndice = document.createElement("td");
var colonnaBottone = document.createElement("button");

colonnaBottone.innerHTML = "Completa";
colonnaIndice.innerText = arr.indexOf()+2;
colonnaNome.innerText = arr.nome;
colonnaProdotto.innerText = arr.prodotto;

riga.appendChild(colonnaIndice);
riga.appendChild(colonnaNome);
riga.appendChild(colonnaProdotto);    
riga.appendChild(colonnaBottone);

//recupero id tabella
var tabella = document.getElementById("tabellaTecnica");


if(testoDecodificato) {
    arr.push(oggetto);
    tabella.appendChild(riga);
    localStorage.setItem(arr.nome, arr.prodotto);
}



