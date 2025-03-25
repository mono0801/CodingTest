function solution(lines) {
    const countMap = new Map();

    lines.map(([x, y]) => {
        for (let i = x; i < y; i++) {
            countMap.set(i, (countMap.get(i) || 0) + 1);
        }
    });

    return [...countMap.keys()].flatMap((v) => (countMap.get(v) > 1 ? v : []))
        .length;
}