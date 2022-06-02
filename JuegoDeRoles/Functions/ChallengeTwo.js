import { EasyAndHardTasks, AleatoryTask } from "./Tasks.js"

function ChallengeTwo(username) {
    let findObject = prompt(`RETO 2\nTu hermano ${username.player2} te dice:
    ${username.player1}, Papá me ha dicho que nos ha asignado una tarea,
    pero antes de decirte que tarea es me pidio que te preguntara si 
    ¿Quieres que te sea asignada?\n
    Si
    No

    \nIngresa si ó no`)
    .toLowerCase()
    .trim(); 

    let hardTask = EasyAndHardTasks("dificil");
        hardTask = AleatoryTask(hardTask);
    let task2Player1;
    let task2Player2;

    switch (findObject) {
        case "si":
            task2Player1 = "";
            task2Player2 = hardTask;
           
            alert(`Rayos!\n
            me dijo que si aceptabas no te iba 
            asignar ninguna tarea y entonces a mi se me asigna la   
            tarea dificil de ${task2Player2.task}`);
        
            break;       
        case "no":
            task2Player1 = hardTask; 
            task2Player2 = "";
            
            alert(`jajajja mala elección!\n
            Papá te asigno una tarea dificil la cual es ${task2Player1.task}\n
            y decidio que a mi no me asignaria ninguna tarea`);
    }
    return {task2Player1, task2Player2}; 
 
}

export { ChallengeTwo };