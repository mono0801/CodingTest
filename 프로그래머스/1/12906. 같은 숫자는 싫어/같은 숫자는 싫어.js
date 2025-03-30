function solution(arr) {
    const answer = [arr.shift()];
    let last = answer[0];

    arr.forEach((element) => {
        if (last != element) {
            answer.push(element);
            last = element;
        }
    });

    return answer;
}