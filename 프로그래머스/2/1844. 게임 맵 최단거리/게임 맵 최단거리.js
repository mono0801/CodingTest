function solution(maps) {
    const n = maps.length,
        m = maps[0].length,
        queue = [[0, 0]],
        dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

    while (queue.length != 0) {
        let cur = queue.shift(),
            [x, y] = cur;

        if (x === n - 1 && y === m - 1) break;

        for (const [dx, dy] of dir) {
            let nx = x + dx,
                ny = y + dy;

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (maps[nx][ny] != 1) continue;

            queue.push([nx, ny]);
            maps[nx][ny] = maps[x][y] + 1;
        }
    }

    return maps[n - 1][m - 1] == 1 ? -1 : maps[n - 1][m - 1];
}