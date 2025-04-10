function solution(arr) {
    console.log(process.version);

    arr = arr.slice(arr.findIndex((v) => v === 2));
    arr = arr.reverse()
        .slice(arr.findIndex((v) => v === 2))
        .reverse();

    return arr.length === 1 && arr[0] != 2 ? [-1] : arr;
}