function solution(n) {
    let answer = [];
    const dx = [0, 1, -1];
    const dy = [1, 0, -1];

    for (let i = 1; i < n + 1; i++) {
        answer.push(new Array(i).fill(0));
    }

    const max = (n * (n + 1)) / 2;
    let x = 0,
        y = 0,
        j = 0;
    for (let i = 1; i <= max; i++) {
        let check = false;
        answer[y][x] = i;

        let nx = x + dx[j];
        let ny = y + dy[j];

        if (ny < 0 || ny >= n) {
            check = true;
        } else if (answer[ny][nx] != 0) {
            check = true;
        }

        if (check) {
            j = (j + 1) % 3;
            nx = x + dx[j];
            ny = y + dy[j];
        }

        x = nx;
        y = ny;
    }

    return answer.flat();
}