function solution(arr) {
    const max = Math.ceil(Math.log2(arr.length));
    return arr.length <= max
        ? arr
        : [...arr, ...new Array(2 ** max - arr.length).fill(0)];
}