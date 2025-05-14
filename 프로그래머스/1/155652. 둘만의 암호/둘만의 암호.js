function solution(s, skip, index) {
    let str = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let i = 0; i < skip.length; i++) {
        str.splice(str.indexOf(skip[i]), 1);
    }

    const answer = s
        .split("")
        .map((v) => {
            const num = str.indexOf(v) + index;
            return str[num % str.length];
        })
        .join("");

    return answer;
}