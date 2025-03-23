function solution(i, j, k) {
    const answer = [];
    for (let n = i; n <= j; n++) {
        let arr = ("" + n).match(new RegExp(k, "g"));
        answer.push(arr || []);
    }

    return answer.flat().length;
}