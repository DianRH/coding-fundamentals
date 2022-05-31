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
    let assignedTask1;
    let assignedTask2;

    switch (findObject) {
        case "a":
            assignedTask1 = AleatoryTask(easyTask);
            assignedTask2 = AleatoryTask(hardTask);

            alert(`Encontraste el control :D!\n
            Mamá está feliz y te ha dado un beso, te ha asignado la 
            tarea ${assignedTask1.task}\ny a tu hermano la tarea ${assignedTask2.task}`);
            break;
        
        case "b":
        case "c":
            assignedTask1 = AleatoryTask(hardTask);
            assignedTask2 = AleatoryTask(hardTask);

            if (assignedTask1 === assignedTask2) {
                assignedTask2 = AleatoryTask(hardTask)
            } else {
                assignedTask2
            }
        
            alert(`Ahi no se encuentra!\n
            a Mamá no le agrado, y te ha asignado la 
            tarea ${assignedTask1.task}\ny a tu hermano la tarea ${assignedTask2.task}`);
            break;
    }
    return {assignedTask1, assignedTask2}; 
 
}

export { ChallengeOne };