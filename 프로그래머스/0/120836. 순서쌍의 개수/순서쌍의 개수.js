function solution(n) {
    const arr = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) arr.push(i);
    }

    return Math.sqrt(n) === arr.at(-1) ? arr.length * 2 - 1 : arr.length * 2;
}