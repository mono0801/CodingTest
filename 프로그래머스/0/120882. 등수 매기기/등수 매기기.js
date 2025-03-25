function solution(score) {
    const mean = score.map(([math, eng]) => {
        return (math + eng) / 2;
    });

    const countMap = new Map();
    mean.map((v) => countMap.set(v, (countMap.get(v) || 0) + 1));

    const sort = [...countMap.keys()].sort((a, b) => b - a);

    const rank = new Map();

    let j = 1;
    for (let i = 0; i < sort.length; i++) {
        rank.set(sort[i], j);
        j += countMap.get(sort[i]);
    }

    return mean.map((v) => {
        return rank.get(v);
    });
}