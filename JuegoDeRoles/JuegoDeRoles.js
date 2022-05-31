import { Character, Username } from "./Menu/Menu.js"
import { ChallengeOne } from "./Functions/ChallengeOne.js";
import { Player } from "./Functions/Player.js"

alert(`Bienvenid@!\nHoy combatiras para que tus papás te asignen el menor
número de tareas del hogar, tu máximo de tareas son 5, 
juega con estrategia y vence a tu hermano.`);

const character = Character();
const username = Username();

alert(`Comencemos ${username.player1}! tu elegiste ser el ${character.player2}.`);

let taskOne = ChallengeOne();






const player1 = Player(
    username.player1, 
    character.player1, 
    taskOne.assignedTask1.task
    );

const player2 = Player(
    username.player2, 
    character.player2, 
    taskOne.assignedTask2.task
    );

console.log(player1);
console.log(player2);
 
