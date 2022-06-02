function Player(username, character, taskOne, taskTwo = "Tarea no asignada", taskThree = "Tarea no asignada") {
    const player = [
        username,
        character,
        taskOne,
        taskTwo,
        taskThree
    ]
    return player
}

export { Player };