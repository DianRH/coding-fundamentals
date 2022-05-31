import {tasks} from "../Data/tasks.js"

function FilterTasks(level, day) {
    const filterTasks = tasks.filter(
        (task) => task.level === level && task.day === day
    )
    return filterTasks
}

function AleatoryTask(task) {
    let aleatory = Math.floor(Math.random() * task.length);
    let aleatoryTask = task[aleatory];
    return aleatoryTask
}

export {
    FilterTasks,
    AleatoryTask
};