function solution(keyinput, board) {
    const maxX = ~~(board[0] / 2);
    const maxY = ~~(board[1] / 2);
    let char = [0, 0];

    keyinput.map((v) => {
        if (v === "up" && char[1] != maxY) char[1]++;
        if (v === "down" && char[1] != -maxY) char[1]--;
        if (v === "left" && char[0] != -maxX) char[0]--;
        if (v === "right" && char[0] != maxX) char[0]++;
    });

    return char;
}