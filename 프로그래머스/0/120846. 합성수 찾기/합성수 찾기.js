const numDiv = (num) => {
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

    return [...countMap.values()].reduce((acc, cur) => (acc *= cur + 1), 1);
};

function solution(n) {
    let count = 0;

    for (let i = 4; i <= n; i++) {
        if (numDiv(i) > 2) count++;
    }

    return count;
}