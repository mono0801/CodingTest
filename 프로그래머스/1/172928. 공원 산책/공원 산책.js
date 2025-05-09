const dir = {
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
    N: [-1, 0],
};

function solution(park, routes) {
    let pos = [null, null];

    for (let i = 0; i < park.length; i++) {
        const y = park[i].indexOf("S");
        if (y != -1) {
            pos = [i, y];
            break;
        }
    }

    routes.forEach((e) => {
        const [d, n] = e.split(" ");
        let check = false;
        const oldPos = pos;

        for (let i = 0; i < Number(n); i++) {
            const [curY, curX] = pos;
            const ny = curY + dir[d][0];
            const nx = curX + dir[d][1];

            if (ny < 0 || ny >= park.length) {
                check = true;
                break;
            }
            if (nx < 0 || nx >= park[ny].length) {
                check = true;
                break;
            }
            if (park[ny][nx] === "X") {
                check = true;
                break;
            }

            pos = [ny, nx];
        }

        if (check) pos = oldPos;
    });

    return pos;
}