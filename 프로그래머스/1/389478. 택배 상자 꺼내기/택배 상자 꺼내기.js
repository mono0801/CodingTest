function solution(n, w, num) {
    const arr = new Array(Math.ceil(n / w))
        .fill()
        .map((_) => new Array(w).fill(0));

    for (let i = 1; i <= n; ) {
        let j = 0;
        for (; j < w; j++) {
            if (i + j > n) {
                break;
            }
            arr[Math.ceil(i / w) - 1][j] = i + j;
        }
        i += j;
    }

    arr.map((v, i) => {
        if (i % 2) {
            return v.reverse();
        }
    });

    const rowIndex = arr.findIndex((row) => row.includes(num));
    const colIndex = arr[rowIndex].indexOf(num);

    const answer = [];
    for (let i = rowIndex; i < arr.length; i++) {
        if (arr[i][colIndex] != 0) answer.push(arr[i][colIndex]);
    }

    return answer.length;
}