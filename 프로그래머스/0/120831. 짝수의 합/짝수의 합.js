function solution(n) {
    let answer = 0;

    for (let i = n; i > 1; i--) {
        if (!(i % 2)) answer += i;
    }

    return answer;
}