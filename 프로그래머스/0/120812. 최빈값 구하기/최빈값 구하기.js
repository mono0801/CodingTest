function solution(array) {
    const countMap = new Map();

    array.map((v) => countMap.set(v, (countMap.get(v) || 0) + 1));

    const answer = [...countMap.keys()]
        .map((v) => [v, countMap.get(v)])
        .sort((a, b) => b[1] - a[1]);

    return answer.filter(
        ([num, cnt]) => cnt === Math.max(...[...countMap.values()])
    ).length != 1
        ? -1
        : answer[0][0];
}