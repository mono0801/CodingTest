function solution(n) {
    let answer = '';
    
    for(let i = 0; i < n; i++) {
        answer += i % 2 ? "박" : "수";
    }
    
    return answer;
}