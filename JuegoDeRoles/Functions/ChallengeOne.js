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
        easyTask = AleatoryTask(easyTask);
    let hardTask = FilterTasks("dificil", undefined);
        hardTask = AleatoryTask(hardTask);
    let assignedTask;

    switch (findObject) {
        case "a":
            assignedTask = easyTask.task

            alert(`Encontraste el control!\n
            Mamá está feliz y te ha dado un beso, te ha asignado la 
            tarea ${assignedTask}`);
            break;
        
        case "b":
        case "c":
            assignedTask = hardTask.task

            alert(`Ahi no se encuentra!\n
            a Mamá no le agrado, y te ha asignado la 
            tarea ${assignedTask}`);
            break;
        default:

            break;
    }
    return assignedTask; 
 
}

export { ChallengeOne };