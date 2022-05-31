import {  Character, Username } from "./Menu/Menu.js"
import { ChallengeOne } from "./Functions/ChallengeOne.js";

alert(`Bienvenid@!\nHoy combatiras para que tus papás te asignen el menor
número de tareas del hogar, tu máximo de tareas son 5, 
juega con estrategia y vence a tu hermano.`);

const character = Character();
const username = Username();

alert(`Comencemos ${username}! tu elegiste ser el ${character}.`);

let taskOne = ChallengeOne();


// PROCESO.....
// function Player(username, character, taskOne) {
    
//     console.log(`${username} eres el ${character}\ntus tareas asignadas son:
//     ${taskOne}`);
// }

// Player(username, character, taskOne)

 

 
