import { EasyAndHardTasks, AleatoryTask } from "./Tasks.js"

function ChallengeOne(username) {
    let findObject = prompt(`RETO 1\nEstas en la habitación con tu mamá y tu hermano, mamá pregunta
    ¿Donde está el control que estaba en mi cama?\n¿Donde crees que se encuentre?\n
    A   Debajo de la almohada
    B   En el buro
    C   Sobre la silla\n
    \nIngresa A, B ó C`)
    .toLowerCase()
    .trim(); 

    let easyTask = EasyAndHardTasks("fácil");
    let hardTask = EasyAndHardTasks("dificil");
    let task1Player1;
    let task1Player2;

    console.log(easyTask);
    console.log(hardTask);

    switch (findObject) {
        case "a":
            task1Player1 = AleatoryTask(easyTask);
            task1Player2 = AleatoryTask(hardTask);

            alert(`Muy bien encontraste el control!\n
            Mamá: Muy bien ${username.player1} (te da da un besito), he decidido
            asignarte una tarea fácil que es ${task1Player1.task}
            y a ti ${username.player2} te asigno una tarea dificil porque
            tampoco acertaste ${task1Player2.task}`);
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
            console.log(task1Player1);
            console.log(task1Player2);
        
            alert(`Ouch fallaste!\n
            Mamá: que mal ${username.player1} ya sabia que no estaba ahí, 
            todo por eso te asignare una tarea dificil que es 
            ${task1Player1.task}\n
            y a ti ${username.player2} te asigno igual una tarea
            dificil porque tampoco acertaste ${task1Player2.task}`);
            break;
    }
    return {task1Player1, task1Player2, };

 
}

export { ChallengeOne };