/*Diseñar y Construir los siguientes script:
1. Una persona deposita hoy al Banco cierta cantidad de dinero, donde le reconocen un interés del 2%
mensual, capitalizado mensualmente. ¿Cuál será el saldo al cabo de 5 años?
Formula a utilizar: Valor Futuro = Valor Presente * (1+intereses)^meses
Para solucionar el Ejercicio, se requiere desarrollar un script que permita conocer a una persona
¿Cuál será el saldo al cabo de 5 años?, si al depositar hoy cierta cantidad de dinero.
Como resultado se debe imprimir en el documento HTML:
Valor consignado: $XXXXX
Valor futuro en 5 años: $XXXXXXX*/
var cifra;
cifra=prompt("Deposite dinero");
var interes=(cifra*2)/100;
var mes=(interes*60);
console.log("Interes en 5 años ",mes);
document.write("<p>Valor inicial: " +cifra+ "<p>Interes generado en los 5 años: " +mes+ "<br>")
/*2. Una frutería ofrece las manzanas a $4.200 el kilo, con un descuento de acuerdo a la siguiente tabla:
Desarrollar un script que permita a la frutería y al cliente (Pedir la cantidad de quilos a comprar)
conocer cuanto pagará un cliente que compre manzanas.
Mostrar en el documento HMTL los resultados así:
La compra de N kilos tiene un valor de $, pero tiene un descuento por valor de $, por lo tanto el
valor a pagar es: $.
EJEMPLO: Si una persona compra 5 kilos de manzanas, el resultado sería: La compra de 5 kilos tiene
un valor de $21000, pero tiene un descuento por valor de $2100, por lo tanto el valor a pagar es:
$18900.*/

var kilo
kilo=parseInt(prompt("Digite kilos comprados"));
var cantidad=(kilo*4200);
if (kilo<=2) {
    console.log(" No tiene descuento ",cantidad);
    document.write(" Kilos comprados " +kilo+  " Precio final sin descuento ",cantidad);
} 

else if (kilo>=2 <=5) {
    var descuento=(cantidad*10)/100;
    var total=(cantidad-descuento);
    console.log(" Descuento de 10% ",descuento);
    document.write(" Kilos comprados "+kilo+ "<p>Precio "+cantidad+"<p>Descuento "+descuento+"<p>Valor total a pagar "+total+"<br>");
} 

else if (kilo >5 <10) {
    var descuento=(cantidad*15)/100;
    var total=(cantidad-descuento);
    console.log(" Descuento de 15% ",descuento,total);
    document.write(" Kilos comprados "+kilo+ "<p>Precio "+cantidad+"<p>Descuento "+descuento+"<p>Valor total a pagar "+total+"<br>");
}

else if (kilo>10) {
    var descuento=(cantidad*20)/100;
    var total=(cantidad-descuento);
    console.log(" Descuento de 20% ",descuento);
    document.write(" Kilos comprados "+kilo+ "<p>Precio "+cantidad+"<p>Descuento "+descuento+"<p>Valor total a pagar "+total+"<br>");
} 
/*Dada la siguiente función:
Y= x^2 – 2x
Se requiere desarrollar un algoritmo que imprima en pantalla, para valores de x desde 1 a 10, lo
siguiente:
a. La suma de todos los valores de Y.
b. Valores de Y múltiplos de 3.
c. Suma de los valores de Y múltiplos de 3.
d. Valores de Y cuyo último digito sea 5.
e. Suma de los valores de Y cuyo último digito es 5.
Resultados esperados:
a. Suma de todos los valores de Y
275
b. Valores de Y múltiplos de 3:3
• 15
• 24
c. Suma de los valores de Y múltiplos de 3
153
d. Valores de Y cuyo último digito es 5
• 15
• 35
e. Suma de los valores de Y cuyo último digito es múltiplo de 5
50
*/

/*Desarrollar un script que imprima el costo de una llamada telefónica, capturando la duración de la
llamada en minutos y conociendo lo siguiente:
• Toda llamada que dure tres minutos o menos tiene un costo de $200.
• Cada minuto adicional cuesta $30.*/

var llamada
llamada=parseInt(prompt("Digite minutos gastados"));
var precio=(llamada*200);
if (llamada <=3){
    console.log("Precio de la llamada",precio);
    document.write("Su total es",precio);
}
else if (llamada >=4){
    var extra=(precio+30);
    var total=(extra);
    console.log("Costos adicionales",extra);
    document.write("<p> total llamada"+precio+"<p> Costo final"+total+"<br>")
}

