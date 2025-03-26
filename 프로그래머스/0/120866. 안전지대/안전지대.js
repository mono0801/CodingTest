const dir = {
    1: [-1, -1],
    2: [0, -1],
    3: [1, -1],
    4: [1, 0],
    5: [1, 1],
    6: [0, 1],
    7: [-1, 1],
    8: [-1, 0],
};

function solution(board) {
    const max = board[0].length;
    board.map((v, i) => {
        v.map((bomb, idx) => {
            if (bomb === 1) {
                for (let j = 1; j < 9; j++) {
                    let curX = i + dir[j][0];
                    let curY = idx + dir[j][1];

                    if (curX >= 0 && curY >= 0 && curX < max && curY < max) {
                        if (board[curX][curY] === 0) board[curX][curY] = 2;
                    }
                }
            }
        });
    });

    let count = 0;
    board.map((v) => {
        v.map((z) => {
            if (z === 0) count++;
        });
    });

    return count;
}