function solution(strArr) {
    const countMap = new Map();

    strArr.map((v) =>
        countMap.set(v.length, (countMap.get(v.length) || 0) + 1)
    );

    return Math.max(...countMap.values());
}