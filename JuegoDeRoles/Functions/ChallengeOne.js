import { FilterTasks, AleatoryTask } from "./Tasks.js"

function ChallengeOne() {
    let findObject = prompt(`RETO 1\nEstas en la habitación con tu mamá y tu hermano, mamá pregunta
    ¿Donde está el control que estaba en mi cama?\n¿Donde crees que se encuentre?\n
    A   Debajo de la almohada
    B   En el buro
    C   Sobre la silla\n
    \nIngresa A, B ó C`)
    .toLowerCase()
    .trim(); 

    // da error por toLowerCase() method
    /*if (findObject === null) {
        alert("Terminaste el juego D:");
    }*/


    let easyTask = FilterTasks("fácil", undefined);
    let hardTask = FilterTasks("dificil", undefined);
    let task1Player1;
    let task1Player2;

    switch (findObject) {
        case "a":
            task1Player1 = AleatoryTask(easyTask);
            task1Player2 = AleatoryTask(hardTask);

            alert(`Encontraste el control :D!\n
            Mamá está feliz y te ha dado un beso, te ha asignado la 
            tarea ${task1Player1.task}\ny a tu hermano la tarea ${task1Player2.task}`);
            break;
        
        case "b":
        case "c":
            task1Player1 = AleatoryTask(hardTask);
            task1Player2 = AleatoryTask(hardTask);

            if (task1Player1 === task1Player2) {
                task1Player2 = AleatoryTask(hardTask)
            } else {
                task1Player2
            }
        
            alert(`Ahi no se encuentra!\n
            a Mamá no le agrado, y te ha asignado la 
            tarea ${task1Player1.task}\ny a tu hermano la tarea ${task1Player2.task}`);
            break;
    }
    return {task1Player1, task1Player2}; 
 
}

export { ChallengeOne };