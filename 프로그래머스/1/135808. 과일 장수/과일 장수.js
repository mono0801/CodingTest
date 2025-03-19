function solution(k, m, score) {
    return (
        score
            .sort((a, b) => b - a)
            .filter((_, i) => !((i + 1) % m))
            .reduce((acc, cur) => acc + cur, 0) * m
    );
}