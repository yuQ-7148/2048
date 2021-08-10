const initGame = (boardBox) => {
    for(let i=0; i<16; i++) {
        boardBox[i] = {
            id: i+1,
            point: NaN
        }
    }
    console.log('typeof id', typeof boardBox[0].id)
    console.log('typeof point', typeof boardBox[0].point)
    console.log(boardBox)
}

export default initGame