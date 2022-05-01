/* EJERCICIO
Escribir un script el cual nos deje introducir una cantidad de exámenes
y luego introducir la nota de cada exámen de manera individual.
Al final del programa nos tiene que devolver el promedio de las notas.

Condiciones( El usuario no puede ingresar notas negativas, ni mayores a 10 ) */

/* ----- while ----- */
// definir variables
 // var cantidadExamenes = parseInt(prompt("Ingrese el número de examenes:"));
 // var suma = 0
 // var examen = 0
 //
 // while (examen<cantidadExamenes) {
 //   var nota = parseInt(prompt(`Ingrese nota ${examen+1} de ${cantidadExamenes}`));
 //   if (nota>=0 && nota<=10) {
 //     suma += nota
 //     examen++
 //   } else {
 //     alert(`Usted ingreso ${nota} debe ingresar un número del 1 al 10`)
 //   }
 // }

 // var promedio = suma/cantidadExamenes
 // alert(`Ingreso ${cantidadExamenes} notas y el promedio es ${promedio.toFixed(2)}`)


/* ----- for ----- */
// definir variables
 var cantidadExamenes = parseInt(prompt("Ingrese el número de examenes:"));
 var suma = 0

 for(var examen =0 ;examen<cantidadExamenes ;examen++){
   var nota = parseInt(prompt(`Ingrese nota ${examen+1} de ${cantidadExamenes}`));
   if (nota>=0 && nota<=10) {
     suma += nota
 }else {
   alert(`Usted ingreso ${nota} debe ingresar un número del 1 al 10`)
 }
}

 var promedio = suma/cantidadExamenes
 alert(`Ingreso ${cantidadExamenes} notas y el promedio es ${promedio.toFixed(2)}`)
