/*  EJERCICIO
Escribe un programa que responda a un usuario que quiere comprar un helado en una
conocida marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.

En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla
«no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado
sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado
(o ninguno).
*/

/*  ESTRUCTURA DE CONTROL IF ELSE   */
alert("Los toppings que tenemos son: oreo, kitkat, brownie, lacasitos");
var toppingUsuario = prompt("Selecciona el topping que quieres").toLowerCase();
var precio = 1.90;

if(toppingUsuario ===  "" ) {
  alert("sin topping tu pagas: $" + precio);
}
else if(toppingUsuario === "oreo") {
  precio = precio + 1
  //precio += 1
  alert("con topping  " +toppingUsuario+ " usted paga: $" + precio.toFixed(2));
}
else if(toppingUsuario === "kitkat") {
  precio = precio + 1.50
  alert("con topping  " +toppingUsuario+ " usted paga: $" + precio.toFixed(2));
}
else if(toppingUsuario === "brownie") {
  precio = precio + 0.75
  alert("con topping  " +toppingUsuario+ " usted paga: $" + precio.toFixed(2));
}
else if(toppingUsuario === "lacasitos") {
  precio = precio + 0.95
  alert("con topping  " +toppingUsuario+ " tu pagas: $" + precio.toFixed(2));
}
else {
  alert("no tenemos este topping, lo sentimos.")
}
