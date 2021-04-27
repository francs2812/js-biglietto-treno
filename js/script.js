// richiesta km da fare
var kmUtente;
kmUtente=prompt("Quanti km vuole percorrere ?")
console.log(kmUtente);
document.getElementById("km").innerHTML= kmUtente ;

// richiesta età
var etaUtente;
etaUtente=prompt("Età passeggero")
console.log(etaUtente);
document.getElementById("eta").innerHTML= etaUtente;

// costo bigletto per km
var prezzoPerKm;
prezzoPerKm= kmUtente * 0.21;
console.log(prezzoPerKm);

// sconto per minorenni e over 65
var scoontoMinorenni;
var scoontoOver65;
if(etaUtente < 18){
    scoontoMinorenni= prezzoPerKm - ((prezzoPerKm * 20) / 100) ;
    console.log(scoontoMinorenni.toFixed(2));
    document.getElementById("prezzo").innerHTML= scoontoMinorenni.toFixed(2);
}else if(etaUtente > 65){
    scoontoOver65= prezzoPerKm - ((prezzoPerKm * 40) / 100) ;
    console.log(scoontoOver65.toFixed(2));
    document.getElementById("prezzo").innerHTML= scoontoOver65.toFixed(2);
}else {
    console.log(prezzoPerKm.toFixed(2));
    document.getElementById("prezzo").innerHTML= prezzoPerKm.toFixed(2);
}

