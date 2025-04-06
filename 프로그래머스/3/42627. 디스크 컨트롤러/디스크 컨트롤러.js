function solution(jobs) {
    jobs.sort(([e, t], [E, T]) => E - e);
    const length = jobs.length;
    const queue = [];
    const answer = [];
    let time = 0;

    while (true) {
        let last;
        if (jobs.length) {
            last = jobs.at(-1);
            while (true) {
                if (!jobs.length || last[0] > time) break;
                queue.push(jobs.pop());
                last = jobs.at(-1);
            }
        }

        if (!queue.length) {
            last = jobs.at(-1);
            time = last[0];
        } else {
            queue.sort(([e, t], [E, T]) => t - T || e - E);
            time += queue[0][1];
            answer.push([...queue.shift(), time]);
        }

        if (!queue.length && !jobs.length) break;
    }

    const total = answer.reduce(
        (acc, [enter, task, end]) => (acc += end - enter),
        0
    );

    return ~~(total / length);
}