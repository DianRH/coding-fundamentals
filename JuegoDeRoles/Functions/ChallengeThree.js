import { EasyAndHardTasks, AleatoryTask } from "./Tasks.js"

function ChallengeThree(username) {
    let firstNumber = Math.floor(Math.random()*100);
    let secondNumber = Math.floor(Math.random()*100);
    let multiplication;
    let easyTask = EasyAndHardTasks("fácil");
        easyTask = AleatoryTask(easyTask);
    let hardTask = EasyAndHardTasks("dificil");
        hardTask = AleatoryTask(hardTask);
    let task3Player1;
    let task3Player2;

    let result = prompt(`RETO 3\nPapá va a verlos para asignarles otra tarea para ser justo,
    y a ti ${username.player1} te quiere asignar una tarea fácil
    pero antes debes de contestarle lo siguiente:\n
    ¿Cuál es el resultado de: ${firstNumber} x ${secondNumber}?\n
    Respuesta:`)
    .trim();  

    multiplication = firstNumber * secondNumber;
    result = Number(result)

    if(multiplication !== result){
        task3Player1 = hardTask
        task3Player2 = "tarea no asignada";

        alert(`Que mal no acertaste!\n
        Papá: te la puse facil ${username.player1} , ahora tendre
        que asignarte una tarea dificil ${task3Player1.task}\n
        y a ti ${username.player2} esta vez no te asignare 
        ninguna tarea`)
    } else {
        task3Player1 = "tarea no asignada";
        task3Player2 = hardTask;

        alert(`Muy bien acertaste!!\n
        Papá: Ese/a es mi hij@! estoy tan orgulloso que no 
        te asignare ninguna tarea pero a ti ${username.player2}
        te asigno la tarea dificil de ${task3Player2.task}`)
    }
    return {task3Player1,task3Player2}
}

export { ChallengeThree };