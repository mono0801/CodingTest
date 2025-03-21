function solution(n) {
    let answer = new Array(n).fill().map((v) => {
        return (v = new Array(n).fill(0));
    });

    for (let i = 0; i < n; i++) {
        answer[i][i] = 1;
    }
    return answer;
}