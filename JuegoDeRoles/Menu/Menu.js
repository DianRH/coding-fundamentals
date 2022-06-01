function Character() {
    let character = prompt(
        "Menu\nSelecciona tu personaje:\n1. Hermano mayor\n2. Hermano menor"
    )
        .toLowerCase()
        .trim();
    let response;
    let condition = false;
    let player1;
    let player2;

    do {
        switch (character) {
            case "1":
            case "1.":
            case "uno":
            case "hermano mayor":
                character = "Hermano mayor";
                player1 = character;
                player2 = "Hermano menor";
                condition = false;
                return {player1, player2};
                break;
            case "2":
            case "2.":
            case "dos":
            case "hemano menor":
                character = "Hermano menor";
                player1 = character;
                player2 = "Hermano mayor"
                condition = false;
                return {player1, player2};
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
    let player1;
    let player2;
    do {
        username = prompt("Ingresa tu nombre:");
        usernameConfirm = confirm(`${username} ¿Quieres modificar tu nombre?`);
        player1 = username;
        player2 = "Daniel"
    } while (usernameConfirm);
    return {player1, player2}
}

export {
    Character,
    Username
}
