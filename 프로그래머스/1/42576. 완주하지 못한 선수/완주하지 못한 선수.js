function solution(participant, completion) {
    const countMap = new Map();
    participant.map((v) => countMap.set(v, (countMap.get(v) || 0) + 1));

    completion.map((v) => {
        countMap.get(v) > 1
            ? countMap.set(v, countMap.get(v) - 1)
            : countMap.delete(v);
    });

    return [...countMap.keys()][0];
}