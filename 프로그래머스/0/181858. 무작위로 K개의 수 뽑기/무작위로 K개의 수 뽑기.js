function solution(arr, k) {
    const set = new Set(arr);
    let answer = new Array(k).fill(-1);
    answer.splice(0, set.size, ...[...set].slice(0, k));

    return answer;
}