import {tasks} from "../Data/tasks.js"

function EasyAndHardTasks(level) {
    const filterTasks = tasks.filter(
        (task) => task.level === level
    )
    return filterTasks
}

function AleatoryTask(task) {
    let aleatory = Math.floor(Math.random() * task.length);
    let aleatoryTask = task[aleatory];
    return aleatoryTask
}

export {
    EasyAndHardTasks,
    AleatoryTask
};