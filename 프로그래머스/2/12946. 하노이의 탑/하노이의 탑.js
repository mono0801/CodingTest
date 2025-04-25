function solution(n) {
    const answer = [];

    const hanoi = (cnt, from, to, by) => {
        if (cnt === 1) return answer.push([from, to]);

        hanoi(cnt - 1, from, by, to);
        answer.push([from, to]);
        hanoi(cnt - 1, by, to, from);
    };

    hanoi(n, 1, 3, 2);

    return answer;
}