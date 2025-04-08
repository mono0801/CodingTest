function solution(brown, yellow) {
    const b = (4 - brown) / 2;
    const c = yellow;
    const d = Math.sqrt(b ** 2 - 4 * c);

    const x = (d - b) / 2;
    const answer = [x + 2, yellow / x + 2];

    return [Math.max(...answer), Math.min(...answer)];
}