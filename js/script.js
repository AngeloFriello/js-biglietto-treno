// # calcolare il prezzo del biglietto del treno
// - chiedere al passeggero quanti anni ha
let età = prompt ('quanti anni hai?')
console.log(età)
// - chiedere al passeggero quanti km vuole percorrere
let kmTotali = prompt('quanti km vuoi percorrere?')
// - definire il prezzo al km base di (0.21$ al km)
let km = '0.21' 
km = ( Math.round(km * 10) / 10 );

// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65
if (età < 18) {

    km = ((km * 80) / 100 )

}else if (età > 65) {

    km = ((km * 60) / 100 )

}else {
    km = '0.21'
}
let prezzoTotale = (km * kmTotali)
console.log(prezzoTotale)

// - far comparire il prezzo finale con lo sconto aplicato

let firstPartMessage 


if (età < 18) {

    firstPartMessage = ('questo è il prezzo del tuo biglietto con sconto aplicato')

}else if (età > 65) {

    firstPartMessage = ('questo è il prezzo del tuo biglietto con sconto aplicato')

}else {
    firstPartMessage = ('questo è il prezzo del tuo biglietto')
}

Math.round

const messageDomElement = document.getElementById('prezzo');
messageDomElement.innerHTML = firstPartMessage + (': ') + prezzoTotale + ('$')  ;
