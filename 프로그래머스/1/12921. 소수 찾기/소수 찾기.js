function solution(n) {
    let answer = Array.from({ length: n + 1 }, () => true);
    answer[0] = false;
    answer[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!answer[i]) continue;

        for (let j = i * 2; j <= n; j += i) {
            if (answer[j]) answer[j] = false;
        }
    }

    return answer.reduce((acc, cur) => (cur ? ++acc : acc), 0);
}