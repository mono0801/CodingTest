function solution(n) {
    const answer = new Array(n).fill(0).map((v, i) => i + 1);
    return answer.filter((v) => v % 2);
}