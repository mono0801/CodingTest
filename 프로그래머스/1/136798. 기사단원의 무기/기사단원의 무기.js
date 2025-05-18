const primeCnt = (n) => {
    if (n === 1) return 1;

    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            cnt += i === Math.sqrt(n) ? 1 : 2;
        }
    }

    return cnt;
};

function solution(number, limit, power) {
    let total = 0;

    for (let i = 1; i <= number; i++) {
        const cnt = primeCnt(i);
        total += cnt > limit ? power : cnt;
    }

    return total;
}