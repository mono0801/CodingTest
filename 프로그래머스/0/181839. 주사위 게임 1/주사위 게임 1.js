function solution(a, b) {
    const aIsOdd = !!(a % 2);
    const bIsOdd = !!(b % 2);

    if (aIsOdd && bIsOdd) return a ** 2 + b ** 2;
    if (aIsOdd || bIsOdd) return 2 * (a + b);
    return Math.abs(a - b);
}