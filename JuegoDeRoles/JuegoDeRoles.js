import { Character, Username } from "./Menu/Menu.js"
import { ChallengeOne } from "./Functions/ChallengeOne.js";
import { Player } from "./Functions/Player.js"
import { ChallengeTwo } from "./Functions/ChallengeTwo.js";
import { ChallengeThree } from "./Functions/ChallengeThree.js";

alert(`Bienvenid@!\nHoy combatiras para que tus papás te asignen el menor
número de tareas del hogar, juega con estrategia y vence a tu hermano.`);

const character = Character();
const username = Username();

alert(`Comencemos ${username.player1}! tu elegiste ser el ${character.player1}.`);

let taskOne = ChallengeOne();
let taskTwo = ChallengeTwo(username);
let taskThree = ChallengeThree(username);

const player1 = Player(
    username.player1, 
    character.player1, 
    taskOne.task1Player1.task,
    taskTwo.task2Player1.task,
    taskThree.task3Player1.task
    );

const player2 = Player(
    username.player2, 
    character.player2, 
    taskOne.task1Player2.task,
    taskTwo.task2Player1.task,
    taskThree.task3Player2.task 
    );

console.log(player1);
console.log(player2);
 

const winner = Object.keys(player1).length < Object.keys(player2).length;

    if (winner) {
        alert(`Felicidades! ${username.player1} has ganado :D\n
        Resultados ${username.player1}:\n
        TAREAS:\n
        ${player1}`)
    } else {
        alert(`Felicidades!${username.player2} has ganado :D\n
        Resultados ${username.player1}:\n
        TAREAS:\n
        ${player2}`)
    }

    // console.log(typeof(filterPlayer1));
    // console.log(Object.keys(player2).length);



