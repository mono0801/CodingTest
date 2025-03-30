function solution(priorities, location) {
    const arr = priorities.map((v, i) => [v, i]);
    const answer = [];

    while (arr.length > 0) {
        let [prior, idx] = arr.shift();

        if (arr.find(([v, i]) => v > prior)) {
            arr.push([prior, idx]);
        } else {
            answer.push([prior, idx]);
        }
    }

    return (
        answer.findIndex(
            (subArr) =>
                subArr[0] === priorities[location] && subArr[1] === location
        ) + 1
    );
}