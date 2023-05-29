console.log('JS OK');

const priceKm = 0.21;

// 0 - Recupero dal DOM gli elementi necessari

const userNamePlaceholder = document.getElementById('name');
console.log(userNamePlaceholder);

const kilometersPlaceholder = document.getElementById('kilometers');
console.log(kilometersPlaceholder);

const agePlaceholder = document.getElementById('age');
console.log(agePlaceholder);

const buttonStart = document.getElementById('start');
console.log(buttonStart);

const buttonReset = document.getElementById('reset');
console.log(buttonReset);

const ticketName = document.getElementById('ticket-name');
console.log(ticketName);

const ticketType = document.getElementById('ticket-type');
console.log(ticketType);

const carriagePlaceholder = document.getElementById('carriage');
console.log(carriagePlaceholder);

const ticketCodePlaceholder = document.getElementById('ticket-code');
console.log(ticketCodePlaceholder);

const ticketPrice = document.getElementById('final-price');
console.log(ticketPrice);

// 1 - Al click del bottone, recupero i dati inseriti

buttonStart.addEventListener('click', function()
{
    const userName = userNamePlaceholder.value;
    console.log(userName);

    const kilometers = parseInt(kilometersPlaceholder.value);
    console.log(kilometers);

    const age = agePlaceholder.value;
    console.log(age);

    // 2 - Calcolo il prezzo iniziale in base ai chilometri

    const initialPrice = kilometers * priceKm;
    console.log(initialPrice);

    // 3 - Se necessario, applico uno sconto in base all'età e stampo in pagina il tipo di biglietto

    if(age === 'minor')
    {
        totalPrice = initialPrice * 0.8;
        ticketType.innerText = 'Biglietto per minori';

    }
    else if(age === 'over65')
    {
        totalPrice = initialPrice * 0.6;
        ticketType.innerText = 'Biglietto per over 65';
    }
    else 
    {
        totalPrice = initialPrice;
        ticketType.innerText = 'Biglietto Standard';
    }

    // 4 - Randomizzo il numero della carrozza e il codice del biglietto

    const random = Math.random();
    console.log(random);

    const carriage = Math.floor(random * 20) + 1;
    console.log(carriage);

    const ticketCode = Math.floor(random * (999999 + 1 - 111111)) + 111111;
    console.log(ticketCode);

    // 5 - Stampo in pagina il prezzo finale e gli altri dati

    ticketPrice.innerText = '€' + totalPrice.toFixed(2);
    ticketName.innerText = userName;
    carriagePlaceholder.innerText = carriage;
    ticketCodePlaceholder.innerText = ticketCode;
}
)

buttonReset.addEventListener('click', function()
{
    userNamePlaceholder.value = '';
    kilometersPlaceholder.value = '';
}
)