function solution(arr) {
    const low = arr[0].length;
    const column = arr.length;

    if (column < low) {
        const list = new Array(low).fill(0);
        for (let i = 0; i < low - column; i++) {
            arr.push(list);
        }
    }

    if (column > low) {
        for (let i = 0; i < column - low; i++) {
            arr.map((v) => v.push(0));
        }
    }

    return arr;
}