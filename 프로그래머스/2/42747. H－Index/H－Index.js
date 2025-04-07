function solution(citations) {
    citations.sort((a, b) => b - a);
    const answer = [];

    for (let i = citations[0]; i >= 0; i--) {
        let arr = citations.filter((v) => v >= i);

        if (i <= arr.length) {
            answer.push(i);
        }
    }

    return Math.max(...answer);
}