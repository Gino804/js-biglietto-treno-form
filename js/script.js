console.log('JS OK');

const priceKm = 0.21;

// 0 - Recupero dal DOM gli elementi necessari

const userNamePlaceholder = document.getElementById('name');
console.log(userNamePlaceholder);

const kilometersPlaceholder = document.getElementById('kilometers');
console.log(kilometersPlaceholder);

const agePlaceholder = document.getElementById('age');
console.log(agePlaceholder);

const button = document.getElementById('start');
console.log(button);

const ticketName = document.getElementById('ticket-name');
console.log(ticketName);

const ticketType = document.getElementById('ticket-type');
console.log(ticketType);

const ticketPrice = document.getElementById('final-price');
console.log(ticketPrice);

// 1 - Al click del bottone, recupero i dati inseriti

button.addEventListener('click', function()
{
    const userName = userNamePlaceholder.value;
    console.log(userName);

    const kilometers = parseInt(kilometersPlaceholder.value);
    console.log(kilometers);

    const age = parseInt(agePlaceholder.value);
    console.log(age);

    // 2 - Calcolo il prezzo iniziale in base ai chilometri

    const initialPrice = kilometers * priceKm;
    console.log(initialPrice);

    // 3 - Se necessario, applico uno sconto in base all'età e stampo in pagina il tipo di biglietto

    if(age < 18)
    {
        totalPrice = initialPrice * 0.8;
        ticketType.innerText = 'Biglietto per minori';

    }
    else if(age >= 65)
    {
        totalPrice = initialPrice * 0.6;
        ticketType.innerText = 'Biglietto per over 65';
    }
    else 
    {
        ticketType.innerText = 'Biglietto Standard';
    }

    // 4 - Stampo in pagina il prezzo finale e gli altri dati

    ticketPrice.innerText += totalPrice.toFixed(2);
    ticketName.innerText = userName;
}
)