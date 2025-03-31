function solution(n, w, num) {
    /*
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
    */

    const arr = Array.from({ length: Math.ceil(n / w) }, () =>
        Array(w).fill(0)
    );

    let i = 1;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < w && i <= n; col++) {
            arr[row][col] = i++;
        }
        if (row % 2) arr[row].reverse();
    }

    const rowIndex = arr.findIndex((row) => row.includes(num));
    const colIndex = arr[rowIndex].indexOf(num);

    let cnt = 0;
    for (let i = rowIndex; i < arr.length; i++) {
        if (arr[i][colIndex] != 0) cnt++;
    }

    return cnt;
}