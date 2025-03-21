const op = {
    right: ({ arr, i, j, num, mod, limit }) => {
        if (arr[i][j + 1] === 0 && j + 1 < limit) {
            arr[i][j + 1] = num;
            return { arr, i, j: ++j, num: ++num, mod, limit };
        }
        return { arr, i, j, num, mod: "down", limit };
    },
    down: ({ arr, i, j, num, mod, limit }) => {
        if (i + 1 >= limit) return { arr, i, j, num, mod: "left", limit };
        if (arr[i + 1][j] === 0) {
            arr[i + 1][j] = num;
            return { arr, i: ++i, j, num: ++num, mod, limit };
        }
        return { arr, i, j, num, mod: "left", limit };
    },
    left: ({ arr, i, j, num, mod, limit }) => {
        if (arr[i][j - 1] === 0 && j - 1 >= 0) {
            arr[i][j - 1] = num;
            return { arr, i, j: --j, num: ++num, mod, limit };
        }
        return { arr, i, j, num, mod: "up", limit };
    },
    up: ({ arr, i, j, num, mod, limit }) => {
        if (arr[i - 1][j] === 0 && i - 1 >= 0) {
            arr[i - 1][j] = num;
            return { arr, i: --i, j, num: ++num, mod, limit };
        }
        return { arr, i, j, num, mod: "right", limit };
    },
};

function solution(n) {
    let answer = new Array(n).fill().map(() => new Array(n).fill(0));
    let data = {
        arr: answer,
        i: 0,
        j: 0,
        num: 2,
        mod: "right",
        limit: n,
    };

    answer[0][0] = 1;

    for (; data.num <= n ** 2; ) {
        data = op[data.mod](data);
    }

    return data.arr;
}