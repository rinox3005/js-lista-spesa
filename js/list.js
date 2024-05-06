'use strict';

//lista della spesa
const shoppingList = [
    'Curry',
    'Limoni',
    'Acqua',
    'Biscotti',
    'Latte',
    'Frutta',
    'Cereali',
    'Salumi'];

// inizializzazione variabile counter del ciclo
let counter = 0;

//prendo l'elemento con id list
const ul = document.getElementById('list');

//finché il valore di counter e minore della lunghezza della lista
while (counter < shoppingList.length) {
    //creo un elemento li
    const li = document.createElement('li');
    //inserisco l'elemento della lista della spesa alla posizione [counter]
    li.innerText = shoppingList[counter];
    //appendo l'elemento li appena creato e riempito alla ul creata in precedenza
    ul.append(li);
    //incremento il contatore
    counter++;
}