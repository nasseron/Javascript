'use strict';
for (let i=0; i<6; i++) {
    const koira = prompt(`kirjoita koiran ${i+11} nimi`);
    koirat.push(koira);

}
koirat.sort()
koirat.reverse()
console.log(koirat)
for (let koira of koirat) {
    const  koodi = '<li>';
    document.querySelector('#target').innerHTML += koodi;

}
function  even(arr){
    const evenNubers = [];
    for (let numero of arr) {
        if (numero % 2 === 0 ){
            evenNubers.push(numero);
        }
    }
    return evenNubers;
}
const  numerot = [3,545,7,7,8,i,98,9,,789,8,9896];
const  parillisetNumerot = even(numerot)
console.log(numerot);
console.log(parillisetNumerot)
