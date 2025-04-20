function solution(number, k) {
    let arr = [...number].map((v) => +v);
    const answer = [];

    for (const num of arr) {
        while (answer[0] && answer[answer.length - 1] < num && k > 0) {
            answer.pop();
            k--;
        }
        answer.push(num);
    }

    answer.splice(answer.length - k, k);

    return answer.join("") + "";
}