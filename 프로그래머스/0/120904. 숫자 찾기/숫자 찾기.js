function solution(num, k) {
    let idx = String(num).indexOf(k);
    return idx >= 0 ? idx + 1 : idx;
}