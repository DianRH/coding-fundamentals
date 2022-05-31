/* ----- MENU ------ */
/*
  ELEGIR JUGADOR
  1.- SELECCIONAR AL PERSONAJE QUE DESEA (HERMANO MAYOR O HERMANO MENOR) :)

  RESTRICCIONES
  1.- SI LE DA EN CANCELAR VOLVER A PREGUNTAR
  2.- SI LE DA EN ACEPTAR TERMINAR

  NOMBRE DE JUGADOR PARA JUGADOR 1 Y JUGADOR
  1.- INGRESAR NOMBRE
  2.- PREGUNTAR SI ES CORRECTO
  3.- SI ES CORRECTO TERMINAR
  3.1.- SI NO ES CORRECTO VOLVER A
            1.-INGRESAR NOMBRE
            2.-PREGUNTAR SI ES CORRECTO
            3.-SI ES CORRECTO TERMINAR

  RESTRICCIONES
  1.- DEBE DE INGRESAR UN NOMBRE SI DA CLIC EN CANCELAR
      VOLVER A PREGUNTAR POR NOMBRE
  2.- SI LE DA CLIC EN ACEPTAR PERO NO INGRESA NOMBRE DEBE
      VOLVER A PREGUNTAR POR NOMBRE

  ¿COMO SE VA A MOSTRAR EN EL JUEGO? NOMBRE MAYOR/ MENOR

  trim() elimina espacios en blanco de los extremos de un string
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

function Character() {
    let character = prompt(
        "Menu\nSelecciona tu personaje:\n1. Hermano mayor\n2. Hermano menor"
    )
        .toLowerCase()
        .trim();
    let response;
    let condition = false;

    do {
        switch (character) {
            case "1":
            case "1.":
            case "uno":
            case "hermano mayor":
                character = "Hermano mayor";
                condition = false;
                return character;
                break;
            case "2":
            case "2.":
            case "dos":
            case "hemano menor":
                character = "Hermano menor";
                condition = false;
                return character;
                break;
            default:
                character = prompt("Selecciona:\n1. Hermano mayor\n2. Hermano menor ");
                condition = true;
                break;
        }
    } while (condition);
}

function Username() {
    let username;
    let usernameConfirm;
    do {
        username = prompt("Ingresa tu nombre:");
        usernameConfirm = confirm(`${username} ¿Quieres modificar tu nombre?`);
    } while (usernameConfirm);
    return username
}

export {
    Character,
    Username
}
