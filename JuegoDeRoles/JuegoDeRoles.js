import { Character, Username } from "./Menu/Menu.js"
import { ChallengeOne } from "./Functions/ChallengeOne.js";
import { Player } from "./Functions/Player.js"
import { ChallengeTwo } from "./Functions/ChallengeTwo.js";
import { ChallengeThree } from "./Functions/ChallengeThree.js";

alert(`Bienvenid@!\nHoy pelearas para que tus papás te asignen el menor
número de tareas del hogar, juega con estrategia y vence a tu hermano.`);

const character = Character();
const username = Username();

alert(`Comencemos ${username.player1}! tu elegiste ser el ${character.player1}.`);

let taskOne = ChallengeOne(username);
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
    taskTwo.task2Player2.task,
    taskThree.task3Player2.task 
    );

const assignedTasksPlayer1 = player1.filter((task)=>{
    return task !== "Tarea no asignada"
}) 

const assignedTasksPlayer2 = player2.filter((task)=>{
    return task !== "Tarea no asignada"
}) 

console.log("filtro",assignedTasksPlayer1);
console.log("filtro",assignedTasksPlayer2);

const winner = assignedTasksPlayer1.length < assignedTasksPlayer2.length;
const totalTasksPlayer1 = assignedTasksPlayer1.length -2;
const totalTasksPlayer2 = assignedTasksPlayer2.length -2;

    if (winner) {
        alert(`Felicidades! ${username.player1.toUpperCase()} has ganado :D\n
        TUS TAREAS SON:\n
        ${totalTasksPlayer1} en total
        1.-${taskOne.task1Player1.task}
        2.-${taskTwo.task2Player1.task  ?? "Ganaste una tarea menos"} 
        3.-${taskThree.task3Player1.task ?? "Ganaste una tarea menos"}

        Tareas de tu hermano ${username.player2}
        SUS TAREAS SON:\n
        1.-${taskOne.task1Player2.task}
        2.-${taskTwo.task2Player2.task  ?? "Ganaste una tarea menos"} 
        3.-${taskThree.task3Player2.task ?? "Ganaste una tarea menos"}`)
    } else {
        alert(`Oh no! tu hermano ${username.player2} gano D:\n
        SUS TAREAS SON:\n
        total: ${totalTasksPlayer2} a realizar
        1.-${taskOne.task1Player2.task}
        2.-${taskTwo.task2Player2.task ?? "Ganaste una tarea menos"} 
        3.-${taskThree.task3Player2.task ?? "Ganaste una tarea menos"}

        TUS TAREAS SON:\n
        total: ${totalTasksPlayer1} a realizar
        1.-${taskOne.task1Player1.task}
        2.-${taskTwo.task2Player1.task  ?? "Ganaste una tarea menos"} 
        3.-${taskThree.task3Player1.task ?? "Ganaste una tarea menos"}`)
    }







