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
    'Salumi',
    'Carne'];

// inizializzazione variabile counter del ciclo
let counter = 0;

//prendo l'elemento con id list
const ul = document.getElementById('list');

//finché il valore di counter e minore della lunghezza della lista
while (counter < shoppingList.length) {

    //creo un elemento li
    const li = document.createElement('li');

    //assegno delle classi ad li
    li.classList.add('d-flex', 'flex-row', 'icon')

    //creo un elemento i
    const i = document.createElement('i');

    //assegno delle classi al mio elemento i
    i.classList.add('fa-regular', 'fa-lemon')

    //creo un elemento h5
    const h5 = document.createElement('h5');

    //inserisco l'elemento della lista della spesa alla posizione [counter] dentro il mio h5
    h5.innerText = shoppingList[counter];

    //appendo al mio li gli elementi i e h5 creati in precedenza
    li.append(i, h5)

    //appendo l'elemento li appena creato e riempito alla ul creata in precedenza
    ul.append(li);

    //incremento il contatore
    counter++;
}