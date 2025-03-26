function solution(n) {
    return new Array(n)
        .fill(0)
        .map((_, i) => i + 1)
        .filter((v) => v % 2);
}