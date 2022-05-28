//Crear una calculadora con las 4 operaciones arimeticas básicas
//y que solo admita dos numeroas a la vez

const operacion = prompt("Ingrese una opcion\n1.adicion\n2.sustraccion\n3.multiplicacion\n4.división\n");
const primerNumero = Number(prompt("Ingrese el primer numero"));
const segundoNumero = Number(prompt("Ingrese el segundo numero"));

let operaciones = {
  adicion: primerNumero + segundoNumero,
  sustraccion: primerNumero - segundoNumero,
  multiplicacion: primerNumero * segundoNumero,
  division: primerNumero / segundoNumero,
}

switch (operacion) {
    //if(operacion==="1" || operacion===="adicion")
    case "adicion":
    case "1":
      alert(`El resultado de la suma es ${operaciones.adicion}`);
        break;
    case "sustraccion":
    case "2":
      alert(`El resultado de la resta es ${operaciones.sustraccion}`);
        break;
    case "multiplicacion":
    case "3":
      alert(`El resultado de la multiplicación es ${operaciones.multiplicacion}`);
        break;
    case "division":
    case "4":
      alert(`El resultado de la division es ${operaciones.division}`);
        break;
    default:
        alert("Seleccionaste un numero o operación incorrecta");
        break;
}
