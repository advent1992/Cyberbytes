



        const languageSelector = document.getElementById('language-selector');
        const translatedNome = document.getElementById('eng1');
        const translatedTitoli = document.getElementById('titolo1');
        const translatedTitoli2 = document.getElementById('titolo2');
        const translatedTitoli3 = document.getElementById('titolo3');
        const translatedTitoli4 = document.getElementById('titolo4');
        const translatedTitoli5 = document.getElementById('titolo5');
        const translatedTitoli6 = document.getElementById('titolo6');
        const translatedTitoli7 = document.getElementById('titolo7');
        const translatedTitoli8 = document.getElementById('titolo8');
        const translatedTitoli9 = document.getElementById('titolo9');
        const translatedTitoli10 = document.getElementById('titolo10');
        const translatedParagrafo = document.getElementById('paragrafo1');
        const translatedParagrafo2 = document.getElementById('paragrafo2');
        const translatedParagrafo3 = document.getElementById('paragrafo3');
        const translatedParagrafo4 = document.getElementById('paragrafo4');
        const translatedParagrafo5 = document.getElementById('paragrafo5');
        const translatedParagrafo6 = document.getElementById('paragrafo6');
        const translatedParagrafo7 = document.getElementById('paragrafo7');
        const translatedParagrafo8 = document.getElementById('paragrafo8');
        const translatedParagrafo9 = document.getElementById('paragrafo9');
        const translatedAzienda = document.getElementById('Azienda');

        

            languageSelector.addEventListener('change', function () {
            
            const selectedLanguage = languageSelector.value;

            if (selectedLanguage === 'it') {
                
                tradottoNome = 'PAGA ALLA CONSEGNA';
                tradottoTitoli = 'Tecnici Di Zona Sempre Vicini';
                tradottoParagrafo = 'Siamo presenti a Napoli e in tutta la provincia di Napoli con un servizio professionale e sempre aggiornato. Facciamo il possibile per riparare direttamente a domicilio a Napoli ed in breve tempo!';
                tradottoTitoli2 = 'Riparazione Elettrodomestici Napoli a Domicilio';
                tradottoparagrafo2 = 'Chiama subito per prenotare un appuntamento.Il nostro tecnico specializzato sarà a casa tua a Napoli nel minor tempo possibile e ti consiglierà, in base al tipo di guasto, se riparare o sostituire il tuo elettrodomestico .'
                tradottoTitoli3 = 'Assistenza elettrodomestici Napoli Orari d apertura';
                tradottoparagrafo3 = 'Lunedì - Venerdì 8.30-19.30 Sabato 8.30-13.00'
                tradottoTitoli4 = 'Informazioni';
                tradottoTitoli5 = 'monitor';
                tradottoParagrafo4 = 'Riparazione e Manutenzione Di Monitor Per i Principali Marchi';
                tradottoTitoli6 = 'Processore';
                tradottoParagrafo5 = 'Riparazione e Manutenzione Di Processori Dei Principali Marchi';
                tradottoTitoli7 = 'Schede Video';
                tradottoParagrafo6 = 'Riparazione e Manutenzione Di Schede Video Dei Principali Marchi';
                tradottoTitoli8 = 'Schede Madri';
                tradottoParagrafo7 = 'Riparazione e Manutenzione Di Schede Madri Per i Principali Marchi';
                tradottoTitoli9 = 'SSD';
                tradottoParagrafo8 = 'Riparazione e Manutenzione Di SSD dei Principali Marchi';
                tradottoTitoli10 = 'HDD';
                tradottoParagrafo9 = 'Riparazione e Manutenzione Di HDD dei Principali Marchi';
                tradottoAzienda = 'Azienda nata a Night City trasferita a Milano per installazione e riparazione cyberwear professionali per le corporazioni';

            } else if (selectedLanguage === 'en' ) {
                tradottoNome = 'PAY ON DELIVERY';
                tradottoTitoli = 'Area Technicians Always Close By';
                tradottoParagrafo = 'We are present in Naples and throughout the province of Naples with a professional and always up-to-date service. We do everything possible to repair directly at home in Naples and in a short time!';
                tradottoTitoli2 = 'Home Appliance Repair Naples';
                tradottoParagrafo2 = 'Call now to book an appointment. Our specialized technician will be at your home in Naples as quickly as possible and will advise you, based on the type of fault, whether to repair or replace your appliance.'
                tradottoTitoli3 = 'Appliance assistance Naples Opening hours';
                tradottoParagrafo3 = 'Monday - Friday 8.30am-7.30pm Saturday 8.30am-1pm'
                tradottoTitoli4 = 'Information';
                tradottoTitoli5 = 'monitor';
                tradottoParagrafo4 = 'Monitor Repair and Maintenance for Major Brands';
                tradottoTitoli6 = 'Processor';
                tradottoParagrafo5 = 'Processor Repair and Maintenance for Major Brands';
                tradottoTitoli7 = 'Video Cards';
                tradottoParagrafo6 = 'Video cards Repair and Maintenance for Major Brands';
                tradottoTitoli8 = 'Motherboards';
                tradottoParagrafo7 = 'Motherboards Repair and Maintenance for Major Brands';
                tradottoTitoli9 = 'SSD';
                tradottoParagrafo8 = 'SSD Repair and Maintenance for Major Brands';
                tradottoTitoli10 = 'HDD';
                tradottoParagrafo9 = 'HDD Repair and Maintenance for Major Brands';
                tradottoParagrafo9 = 'HDD Repair and Maintenance for Major Brands';
                tradottoAzienda = 'Company born in Night City moved to Milan for professional cyberwear installation and repair for corporations';

                
        } 
            translatedNome.textContent = tradottoNome;
            translatedTitoli.textContent = tradottoTitoli;
            translatedTitoli2.textContent = tradottoTitoli2;
            translatedTitoli3.textContent = tradottoTitoli3;
            translatedTitoli4.textContent = tradottoTitoli4;
            translatedTitoli5.textContent = tradottoTitoli5;
            translatedTitoli6.textContent = tradottoTitoli6;
            translatedTitoli7.textContent = tradottoTitoli7;
            translatedTitoli8.textContent = tradottoTitoli8;
            translatedTitoli9.textContent = tradottoTitoli9;
            translatedTitoli10.textContent = tradottoTitoli10;

            translatedParagrafo.textContent = tradottoParagrafo;
            translatedParagrafo2.textContent = tradottoParagrafo2;
            translatedParagrafo3.textContent = tradottoParagrafo3;
            translatedParagrafo4.textContent = tradottoParagrafo4;
            translatedParagrafo5.textContent = tradottoParagrafo5;
            translatedParagrafo6.textContent = tradottoParagrafo6;
            translatedParagrafo7.textContent = tradottoParagrafo7;
            translatedParagrafo8.textContent = tradottoParagrafo8;
            translatedParagrafo9.textContent = tradottoParagrafo9;
            translatedAzienda.textContent = tradottoAzienda;



        });
    