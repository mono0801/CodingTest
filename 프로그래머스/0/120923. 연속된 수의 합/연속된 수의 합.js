const sum = (a, n) => (n * (2 * a + (n - 1))) / 2;

function solution(num, total) {
    let a = -1000;
    for (a; a <= 1000; a++) {
        if (sum(a, num) === total) break;
    }

    return new Array(num).fill().map((_, i) => {
        return a + i;
    });
}