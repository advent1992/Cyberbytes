
const languageSelector = document.getElementById('language-selector');

const translatedNome = document.getElementById('nomeLabel');
const translatedCognome = document.getElementById('cognomeLabel');
const translatedCitta = document.getElementById('labelCitta');
const translatedProdotti = document.getElementById('prodotti');
const translatedCommento = document.getElementById('commento');
const translatedNumeroDiTelefono = document.getElementById('numTel');
const translatedAccettaTermini = document.getElementById('accetta');
const translatedInvia = document.getElementById('invia');
const translatedBottone = document.getElementById('bottoneCerca');


//EventListener che permette al pulsante di essere abilitato o disabilitato se sono state accettati o meno i termini e le condizioni
const inviaButton = document.getElementById('invia');
const checkbox = document.getElementById('invalidCheck');
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        inviaButton.classList.remove('disabled');
        inviaButton.removeAttribute('aria-label');
    } else {
        inviaButton.classList.add('disabled');
        inviaButton.setAttribute('aria-label', 'Il pulsante è disabilitato');
    }
});


languageSelector.addEventListener('change', function () {

const selectedLanguage = languageSelector.value;

if (selectedLanguage === 'it') {

    tradottoNome = 'Nome';
    tradottoCognome = 'Cognome';
    tradottoCitta = 'Città';
    tradottoProdotti = 'Seriale Prodotto';
    tradottoCommento = 'Spiegaci meglio qual è il tuo problema';
    tradottoNumeroDiTelefono = 'Numero di telefono';
    tradottoAccettaTermini = 'Accetta Termini e condizioni';
    tradottoInvia = 'Invia';
    tradottoBottone = 'Cerca il tuo Prodotto'

} else if (selectedLanguage === 'en' ) {
    tradottoNome = 'Name';
    tradottoCognome = 'Surname';
    tradottoCitta = 'City';
    tradottoProdotti = 'Serial Number Product';
    tradottoCommento = 'Tell us more about what your problem is';
    tradottoNumeroDiTelefono = 'Phone number';
    tradottoAccettaTermini = 'Accept Terms and Conditions';
    tradottoInvia = 'Submit';
    tradottoBottone = 'Search your Product'
} 
translatedNome.textContent = tradottoNome;
translatedCognome.textContent = tradottoCognome
translatedCitta.textContent = tradottoCitta;
translatedProdotti.textContent = tradottoProdotti;
translatedCommento.textContent = tradottoCommento;
translatedNumeroDiTelefono.textContent =tradottoNumeroDiTelefono;
translatedAccettaTermini.textContent = tradottoAccettaTermini;
translatedInvia.textContent = tradottoInvia;
translatedBottone.textContent = tradottoBottone;

});


function acquisisciDati(){
    //invia dati nella pagina successiva
    var nomeInput = document.getElementById('validationCustom01').value;
    var prodottoInput = document.getElementById('validationCustom05').value;

    var nomePiuProdotto = nomeInput + "@" + prodottoInput;

    const testoCodificato = encodeURIComponent(nomePiuProdotto);
    const urlDestinazione = "GestioneTecnici.html?testo=" + testoCodificato;

    window.location.href = urlDestinazione;


    //resetta i campi
    document.getElementById('validationCustom01').value = "";
    document.getElementById('validationCustom02').value = "";
    document.getElementById('validationCustomUsername').value = "";
    document.getElementById('validationCustom03').value = "";
    document.getElementById('validationCustom05').value = "";
    document.getElementById('floatingTextarea2').value = "";
    document.getElementById('validationTelefono').value = "";

    
    
}

