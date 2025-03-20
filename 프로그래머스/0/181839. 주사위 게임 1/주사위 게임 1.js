function solution(a, b) {
    const aRemain = a % 2;
    const bRemain = b % 2;

    if (aRemain === 1 && bRemain === 1) return a ** 2 + b ** 2;
    if (aRemain === 0 && bRemain === 0) return Math.abs(a - b);
    return 2 * (a + b);
}