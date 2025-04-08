function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const score = [0, 0, 0];
    const answer = [];

    answers.forEach((e, i) => {
        if (e === first[i % first.length]) score[0]++;
        if (e === second[i % second.length]) score[1]++;
        if (e === third[i % third.length]) score[2]++;
    });

    score.forEach((e, i) => {
        if (e === Math.max(...score)) answer.push(i + 1);
    });

    return answer;
}