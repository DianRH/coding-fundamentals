function Player(username, character, taskOne, taskTwo, taskThree) {
    const player = {
        username,
        character,
        taskOne,
        taskTwo,
        taskThree
    }
    return player
}

export { Player };