function solution(priorities, location) {
    const arr = priorities.map((v, i) => [v, i]);
    const answer = [];
    let cnt = 0;

    while (arr.length > 0) {
        let [prior, idx] = arr.shift();

        if (arr.find(([v, i]) => v > prior)) {
            arr.push([prior, idx]);
        } else {
            answer.push([prior, idx]);
            cnt++;
            if (priorities[location] === prior && location === idx) break;
        }
    }

    return cnt;
}