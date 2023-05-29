# Calcolo del prezzo del biglietto del treno

## Traccia:

Scrivere un programma che chieda all’utente:

- Il proprio nome
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

### MILESTONE 1:

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

### MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

### BONUS:

- Randomizzare un numero per la carrozza dell'utente
- Randomizzare un numero per il codice del biglietto
- Utilizzare una `<select>` invece di un `<input>` per determinare l'età dell'utente
- Implementare il reset del form tramite un bottone di reset

## Steps:

0. Recupero dal DOM gli elementi necessari
1. Al click del bottone, recupero i dati inseriti dall'utente
2. Calcolo il prezzo iniziale in base ai chilometri
3. Se necessario, applico uno sconto in base all'età
4. Randomizzo il numero della carrozza e il codice del biglietto
5. Stampo il prezzo finale e tutti gli altri dati in pagina
