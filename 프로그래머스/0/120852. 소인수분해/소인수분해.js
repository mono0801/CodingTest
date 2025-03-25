const primeFactors = (num) => {
    const countMap = new Map();

    while (true) {
        for (let i = 2; i <= num; i++) {
            if (!(num % i)) {
                countMap.set(i, (countMap.get(i) || 0) + 1);
                num = num / i;
                break;
            }
        }
        if (num === 1) break;
    }

    return countMap;
};

function solution(n) {
    const pF = primeFactors(n);

    return [...pF.keys()].sort((a, b) => a - b);
}