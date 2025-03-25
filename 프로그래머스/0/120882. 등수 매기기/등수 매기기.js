function solution(score) {
    const mean = score.map(([math, eng]) => (math + eng) / 2);

    // const countMap = new Map();
    // mean.map((v) => countMap.set(v, (countMap.get(v) || 0) + 1));

    // const rank = new Map();
    // let rankValue = 1;
    // [...countMap.keys()]
    //     .sort((a, b) => b - a)
    //     .forEach((v) => {
    //         rank.set(v, rankValue);
    //         rankValue += countMap.get(v);
    //     });

    // const answer = mean.map((v) => rank.get(v));

    return mean.map((v) => mean.filter((el) => el > v).length + 1);
}