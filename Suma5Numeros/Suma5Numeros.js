/* EJERCICIO
Crea un script que permita al usuario ingresar 5 números, y nos devuelva la suma de estos números en consola.
 Ejemplo: El usuario ingresa 1,2,3,4,5
 El script devuelve 15
*/

/*se declara la variable afuera del ciclo, si se declara dentro del ciclo
  la variable se inicializa cada que ingresa al ciclo y la suma no se puede
  hacer de manera correcta*/
var suma = 0

for (var i = 1; i <=5; i++) {
  var numeros = parseInt(prompt(`Ingresa ${i} de 5 numeros:`));
  suma += numeros
  console.log(numeros);
}
  alert(`La suma de los 5 números es: ${suma}`)
