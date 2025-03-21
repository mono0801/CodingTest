function solution(strArr) {
    let answer = [];
    strArr.map((v) => {
        if (!v.match("ad")) answer.push(v);
    });
    return answer;
}