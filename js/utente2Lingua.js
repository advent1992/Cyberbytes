//pesca id selettore linguaggio
const languageSelector = document.getElementById('language-selector');
//pesca id dei testi da tradurre
const translatedNome = document.getElementById('nomeLabel');
const translatedNumeroSeriale = document.getElementById('serialeLabel');
const translatedCercaProdotto = document.getElementById('cerca');
const translatedProdotti = document.getElementById('prodotti');
const translatedNomeTabella = document.getElementById('nomeTabella');
const translatedSerialeTabella = document.getElementById('serialeTabella');
const translatedAvanzamento = document.getElementById('avanzamento');
const translatedScarica = document.getElementById('download');
//definisce l'event listener

languageSelector.addEventListener('change', function () {

    const selectedLanguage = languageSelector.value;

    if (selectedLanguage === 'it') {
        tradottoNome = 'Nome';
        tradottoNumeroSeriale = 'Numero Seriale';
        tradottoCercaProdotto = 'Cerca';
        tradottoProdotti = 'Prodotti';
        tradottoNomeTabella = 'Nome';
        tradottoSerialeTabella = 'Numero Seriale';
        tradottoAvanzamento = 'Avanzamento';
        tradottoScarica = 'Scarica Documenti';

    } else if (selectedLanguage === 'en') {
        tradottoNome = 'Name';
        tradottoNumeroSeriale = 'Serial Number';
        tradottoCercaProdotto = 'Search ';
        tradottoProdotti = 'Item';
        tradottoNomeTabella = 'Name';
        tradottoSerialeTabella = 'Serial';
        tradottoAvanzamento = 'State';
        tradottoScarica = 'Download PDF';
    }
    translatedNome.textContent = tradottoNome;
    translatedNumeroSeriale.textContent = tradottoNumeroSeriale
    translatedCercaProdotto.textContent = tradottoCercaProdotto;
    translatedProdotti.textContent = tradottoProdotti;
    translatedNomeTabella.textContent = tradottoNomeTabella;
    translatedSerialeTabella.textContent = tradottoSerialeTabella;
    translatedAvanzamento.textContent = tradottoAvanzamento;
    translatedScarica.textContent = tradottoScarica;

});

var user = [
    prodotto = {
        nome: "vincenzo",
        numSeriale: "0001",
        statoAvanzamento: "in lavorazione"
    },
    prodotto = {
        nome: "davide",
        numSeriale: "0002",
        statoAvanzamento: "completato"
    },
    prodotto = {
        nome: "gianluca",
        numSeriale: "0003",
        statoAvanzamento: "in  attesa"
    },
    prodotto = {
        nome: "denis",
        numSeriale: "0004",
        statoAvanzamento: "in lavorazione"
    },
    prodotto = {
        nome: "raffaele",
        numSeriale: "0005",
        statoAvanzamento: "completato"
    },
    prodotto = {
        nome: "peppe",
        numSeriale: "0006",
        statoAvanzamento: "in attesa"
    },
    prodotto = {
        nome: "francesco",
        numSeriale: "0007",
        statoAvanzamento: "completato"
    },
    prodotto = {
        nome: "fabrizio",
        numSeriale: "0008",
        statoAvanzamento: "completato"
    },
    prodotto = {
        nome: "maria",
        numSeriale: "0009",
        statoAvanzamento: "in lavorazione"
    }
];



function cercaProdotto() {
    var nomeUtente = document.getElementById("nome").value;
    var numeroSerial = document.getElementById("seriale").value;

    var riga = document.createElement("tr");
    var colonnaNome = document.createElement("td");
    var colonnaSeriale = document.createElement("td");
    var colonnaAvanzamento = document.createElement("td");

    var tabella = document.getElementById("tabella");

    for (var i = 0; i < user.length; i++) {

       

        if (nomeUtente === user[i].nome && numeroSerial === user[i].numSeriale) {

            colonnaNome.innerText = user[i].nome;
            colonnaSeriale.innerText = user[i].numSeriale;
            colonnaAvanzamento.innerText = user[i].statoAvanzamento;


            riga.appendChild(colonnaNome);
            riga.appendChild(colonnaSeriale);
            riga.appendChild(colonnaAvanzamento);

            tabella.appendChild(riga);

        }
    }
}



//stampa il testo ancorta da fare



const saveButton = document.getElementById("download");

saveButton.addEventListener('click', function () {
    const nome = document.getElementById("nome").value;
    const seriale = document.getElementById("seriale").value;
    const textInput = `Nome: ${nome}\nSeriale: ${seriale}`;

    const blob = new Blob([textInput], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "file.txt";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}); 
