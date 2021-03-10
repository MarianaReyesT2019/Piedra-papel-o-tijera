var tit = "tijera"
 var p = "piedra"
 var paper = "papel";
 var p1; 
 var p2;
 let fa = [ "piedra", "papel", "tijera"]
 p1 = fa[Math.floor(fa.length * Math.random())];
 p2 = fa[Math.floor(fa.length * Math.random())];
 console.log("El jugador eligio " + p1);
 console.log("El jugador eligio " + p2);
 
 if ( p1 == p2){
     console.log("Empate");
     
 } if (p1 == p && fa == tit){
     console.log("Ganoooo el p1");
 } if (p1 == tit && fa == paper ){
     console.log("El jugador ganaaaa");
 }if ( p1 == paper && fa == p){
     console.log("Gana el usuario");
     
 } if (p2 == p && p1 == tit){
     console.log(" El p2 ganaaaa");
     
 } if (p2 == tit && p1 == paper){
     console.log("El p2 ganaaaa ");
     
 }if (p2 == paper && p1 == tit ){
     console.log("El p2 ganaaaaa");
 }
 