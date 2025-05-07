const getPermu = (arr) => {
    const result = [];

    const backTrack = (path, used) => {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(arr[i]);
            backTrack(path, used);
            path.pop();
            used[i] = false;
        }
    };

    backTrack([], Array(arr.length).fill(false));
    return result;
};

function solution(k, dungeons) {
    const arr = Array.from({ length: dungeons.length }, (_, i) => i);
    const p = getPermu(arr);

    let max = 0;
    for (let i = 0; i < p.length; i++) {
        let cnt = 0,
            stamina = k;
        for (let j = 0; j < dungeons.length; j++) {
            if (dungeons[p[i][j]][0] > stamina) {
                break;
            } else {
                stamina = stamina - dungeons[p[i][j]][1];
                cnt++;
            }
        }

        if (max < cnt) max = cnt;
    }

    return max;
}