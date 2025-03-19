function solution(arr) {
    const answer = [];
    arr.map((v) => answer.push(new Array(v).fill(v)));

    return answer.flat();
}