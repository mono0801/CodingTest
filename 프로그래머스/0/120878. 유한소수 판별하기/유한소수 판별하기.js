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

function solution(a, b) {
    const son = primeFactors(a);
    const mom = primeFactors(b);

    [...son.keys()].map((v) => {
        if (mom.has(v)) {
            mom.get(v) > son.get(v)
                ? mom.set(v, mom.get(v) - son.get(v))
                : mom.delete(v);
        }
    });

    return [...mom.keys()].filter((v) => v != 2 && v != 5).length > 0 ? 2 : 1;
}