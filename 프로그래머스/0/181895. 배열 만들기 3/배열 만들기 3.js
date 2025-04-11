function solution(arr, intervals) {
    let answer = [];
    
    intervals.map(([a, b]) => answer = [...answer, ...arr.slice(a, b +1)])
    return answer;
}