function solution(X, Y) {
    const xMap = new Map();
    const map = new Map();
    let answer = "";

    [...X].forEach((e) => xMap.set(e, (xMap.get(e) || 0) + 1));
    [...Y].forEach((e) => {
        if (xMap.has(e) && xMap.get(e) > 0) {
            map.set(e, (map.get(e) || 0) + 1);
            xMap.set(e, xMap.get(e) - 1);
        }
    });

    if ([...map.keys()].length === 0) return "-1";
    if ([...map.keys()][0] === "0") return "0";

    for (let i = 9; i >= 0; i--) {
        if (map.has(i + "")) answer += String(i).repeat(map.get(`${i}`));
    }

    return answer;
}