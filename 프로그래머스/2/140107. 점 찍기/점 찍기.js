const limit = (a, d) => Math.floor(Math.sqrt(d ** 2 - a ** 2));

function solution(k, d) {
    let count = 0;

    for (let a = 0; a <= d; a += k) {
        count += Math.floor(limit(a, d) / k) + 1;
    }

    return count;
}