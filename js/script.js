// Creare una form per calcolare il prezzo del biglietto e stamparlo.

const formBtn = document.getElementById("form_btn");
console.log(formBtn);
formBtn.addEventListener("click", 
    function() {
    // Prelevo gli input dell'utente
    const userName = document.getElementById("user_name").value;
    console.log(userName);

    const kmNumber = parseInt(document.getElementById("km_number").value);
    console.log(kmNumber, typeof(kmNumber));

    const userAge = document.getElementById("user_age").value;
    console.log(userAge);

    // Visualizzo il risultato all'utente
    // visualizzo il nome dell utente nel biglietto
    const nameResult = document.querySelector('.result_name');
    console.log(nameResult);
    nameResult.innerHTML = `${userName}`;
    // visulaizzo il tipo di offerta
    const offerType = document.querySelector('.result_offer');
    console.log(offerType);
    offerType.innerHTML = `Biglietto ${userAge}`;
    // inserisco il numero della carrozza
    // genero il numero della carrozza random
    const wagonNumber = document.querySelector('.wagon_number');
    console.log(wagonNumber);
    wagonNumber.innerHTML = Math.floor(Math.random() * 9) + 1;
    // inserisco il codice cp
    // genero il codice cp random
    const cpCode = document.querySelector('.cp_number');
    console.log(cpCode);
    cpCode.innerHTML = Math.floor(Math.random() * 99999) + 1;
    // calcolo il prezzo del biglietto in bas ai km
    // se i km non sono numeri o non viene selezionata l'età non faccio il calcolo
    if (isNaN(kmNumber) || document.getElementById('user_age').value === "") {
        alert ("Dati non corretti");
    } else {
        // calcolo il prezzo base del biglietto base:
        let ticketPrice = kmNumber * 0.21;
        console.log(ticketPrice);
        let discount = 0;
        // calcolare lo sconto
        // Se l'utente è minorenne -> applico lo sconto di 20%
        // altrimeti se è over 65 applico lo sconto del 40%
        if (userAge === "under-18") {
            discount = ticketPrice * 0.2
        } else if (userAge === "over-65") {
            discount = ticketPrice * 0.4
        }
        ticketPrice = ticketPrice - discount;
        console.log(ticketPrice, typeof(ticketPrice));
        // inserisco il prezzo finale
        const finalPrice = document.querySelector('.final_price');
        console.log(finalPrice, typeof(finalPrice));
        finalPrice.innerHTML = `${ticketPrice.toFixed(2)}€`;
        // visualizzo il biglietto
        const finalResult = document.querySelector('.final_result');
        finalResult.classList.remove('d-none');
    }
    }
);

const clearBtn = document.getElementById('form_btn_clear');
console.log(clearBtn);

clearBtn.addEventListener("click",
    function() {
        // nascondo il risultato
        const finalResult = document.querySelector('.final_result');
        finalResult.classList.add('d-none');

        // svuoto gli input del form
        const userName = document.getElementById("user_name");
        console.log(userName);
        userName.value = "";

        const kmNumber = document.getElementById("km_number");
        console.log(kmNumber);
        kmNumber.value = "";

        const userAge = document.getElementById("user_age");
        userAge.value = "";
    }
)