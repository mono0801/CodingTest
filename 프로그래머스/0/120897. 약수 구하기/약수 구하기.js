function solution(n) {
    let answer = [];
    for (let i = 1; i <= ~~Math.sqrt(n); i++) {
        if (!(n % i)) {
            n / i === i ? answer.push([i]) : answer.push([i, n / i]);
        }
    }
    return answer.flat().sort((a, b) => a - b);
}