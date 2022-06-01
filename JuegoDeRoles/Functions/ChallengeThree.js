import { FilterTasks, AleatoryTask } from "./Tasks.js"

function ChallengeThree(username) {
    let firstNumber = Math.floor(Math.random()*100);
    let secondNumber = Math.floor(Math.random()*100);
    let multiplication;
    let easyTask = FilterTasks("fácil", undefined);
        easyTask = AleatoryTask(easyTask);
    let hardTask = FilterTasks("dificil", undefined);
        hardTask = AleatoryTask(hardTask);
    let task3Player1;
    let task3Player2;

    let result = prompt(`RETO 3\nPapá va a verlos para asignarles otra tarea,
    y a ti ${username.player1} te quiere asignar una tarea fácil
    pero antes debes de contestarle lo siguiente:\n
    ¿Cuál es el resultado de: ${firstNumber} x ${secondNumber}?\n
    solo tienes 10 segundos  \n\nRespuesta:`)
    .trim();  

    multiplication = firstNumber * secondNumber;
    result = Number(result)

    if(multiplication !== result){
        task3Player1 = hardTask
        task3Player2 = "";
        alert(`Que mal no acertaste!\n
        Papá te ha asignado la tarea: 
        ${task3Player1.task}\ny a tu hermano ${username.player2} decidio
        no asignarle ninguna tarea :C`)
    } else {
        task3Player1 = "";
        task3Player2 = hardTask;
        alert(`Muy bien acertaste!!\n
        Papá papá decidio no asignarte 
        ninguna tarea y asignarse la tarea a tu hermano C: 
        ${task3Player2.task}`)
    }
    return {task3Player1,task3Player2}
}

export { ChallengeThree };