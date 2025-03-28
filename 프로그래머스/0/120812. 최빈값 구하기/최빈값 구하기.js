function solution(array) {
    const countMap = new Map();

    array.map((v) => countMap.set(v, (countMap.get(v) || 0) + 1));

    const answer = [...countMap].sort((a, b) => b[1] - a[1]);

    return answer.length === 1 || answer[0][1] > answer[1][1]
        ? answer[0][0]
        : -1;
}