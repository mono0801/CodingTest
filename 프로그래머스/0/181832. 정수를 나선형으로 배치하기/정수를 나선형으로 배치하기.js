function solution(n) {
    let arr = new Array(n).fill().map(() => new Array(n).fill(0));
    let i = 0,
        j = 0,
        num = 1;
    let mod = "right";

    const directions = {
        right: [0, 1, "down"],
        down: [1, 0, "left"],
        left: [0, -1, "up"],
        up: [-1, 0, "right"],
    };

    while (num <= n ** 2) {
        arr[i][j] = num++;
        let [dreaction_i, dreaction_j, nextMod] = directions[mod];

        let next_i = i + dreaction_i,
            next_j = j + dreaction_j;
        if (
            next_i >= n ||
            next_j >= n ||
            next_i < 0 ||
            next_j < 0 ||
            arr[next_i][next_j] !== 0
        ) {
            mod = nextMod;
            [dreaction_i, dreaction_j] = directions[mod];
            next_i = i + dreaction_i;
            next_j = j + dreaction_j;
        }

        i = next_i;
        j = next_j;
    }

    return arr;
}