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

    // 3 - Se necessario, applico uno sconto in base all'età

    if(age < 18)
    {
        totalPrice = initialPrice * 0.8;
    }
    else if(age >= 65)
    {
        totalPrice = initialPrice * 0.6;
    }

    // 4 - Stampo in console il prezzo finale

    console.log('Prezzo totale: €', totalPrice.toFixed(2))
}
)