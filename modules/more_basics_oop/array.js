
let colori = ['rosso', 'verde', 'giallo'];
console.log(colori); // elementi aggiunti nell'array
console.log(colori[0]); // recupero posizione elemento array
colori.unshift('blu') // aggiungo un elemento alla prima posizione
console.log(colori)
colori.pop()// rimuovo l'ultimo elemento
console.log(colori);
colori.push('bianco')// aggiungo un nuovo elemento nell'ultima posizione
console.log(colori);
colori.sort()
console.log(colori); // ordino in crescente
colori.reverse()    // ordino in decrescente
console.log(colori);
colori.length      // lunghezza array
console.log(colori);
colori.splice(2,0,'nero','grigio') // aggiungo 2 elementi all'indice 2
console.log(colori);
colori.splice(2,2) // rimuovo 2 elementi dall'indice 2
console.log(colori);
colori.forEach(function(item,index){// ciclare array
    console.log(item+' '+index);
});

let multi= [['anna',45],['paolo',10],['luca',25],['alex',55]];

console.log(multi);


