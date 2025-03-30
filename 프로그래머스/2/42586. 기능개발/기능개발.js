function solution(progresses, speeds) {
    const queue = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    const answer = [];

    while (queue.length > 0) {
        let complete = queue.shift();
        let cnt = 1;

        while (complete >= queue[0]) {
            queue.shift();
            cnt++;
        }

        answer.push(cnt);
    }

    return answer;
}