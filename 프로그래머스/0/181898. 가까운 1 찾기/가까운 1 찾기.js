function solution(arr, idx) {
    const index = arr.slice(idx).findIndex((v) => v === 1);
    return index === -1 ? index : index + idx;
}