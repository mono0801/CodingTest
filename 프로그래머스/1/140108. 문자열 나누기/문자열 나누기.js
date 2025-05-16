function solution(s) {
    const arr = [],
        answer = [];
    let x = 0,
        y = 0,
        cur = "";

    for (let i = 0; i < s.length; i++) {
        if (cur === "") cur = s[i];

        s[i] === cur ? x++ : y++;
        arr.push(s[i]);

        if (x === y) {
            (cur = ""), (x = 0), (y = 0);
            answer.push(arr.join(""));
            arr.length = 0;
        }
    }

    if (arr.join("") != "") answer.push(arr.join(""));

    return answer.length;
}