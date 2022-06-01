import { FilterTasks, AleatoryTask } from "./Tasks.js"

function ChallengeTwo(username) {
    let findObject = prompt(`RETO 2\nTu hermano ${username.player2} te dice:
    ${username.player1}, papá me ha dicho que te asigno una tarea
    ¿Aceptas que te sea asignada? en caso contrario se me asignara a mi.\n
    1   Si acepto
    2   No acepto

    \nIngresa 1 ó 2`)
    .trim(); 

    let hardTask = FilterTasks("dificil", undefined);
        hardTask = AleatoryTask(hardTask);
    let task2Player1;
    let task2Player2;

    switch (findObject) {
        case "1":
            task2Player1 = hardTask; 
            task2Player2 = "";

            alert(`jajajja mala elección!\n
            Papá te asigno la tarea, ${task2Player1.task}\n`);
            break;       
        case "2":
            task2Player1 = "";
            task2Player2 = hardTask;
            
            alert(`Rayos!\n
            A tu hermano ${username.player2} se le asigno la tarea ${task2Player2.task}`);

    }
    return {task2Player1, task2Player2}; 
 
}

export { ChallengeTwo };