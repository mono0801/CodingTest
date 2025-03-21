function solution(k, d) {
    let count = 0;

    for (let a = 0; a <= d; a += k) {
        count += ((Math.sqrt(d * d - a * a) / k) | 0) + 1;
    }

    return count;
}
