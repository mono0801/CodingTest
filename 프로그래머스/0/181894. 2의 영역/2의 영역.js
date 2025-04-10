function solution(arr) {
    if (arr.some((v) => v === 2))
        return arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    return [-1];
}