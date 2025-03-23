function solution(s) {
    let countMap = {};

    [...s].map((v) => {
        countMap[v] ? (countMap[v] += 1) : (countMap[v] = 1);
    });

    return Object.keys(countMap)
        .filter((v) => countMap[v] === 1)
        .sort()
        .join("");
}