function solution(n) {
    let cnt = 0,
        sum = 0;
    const queue = [];

    for (let i = 1; i <= n; i++) {
        queue.unshift(i);

        sum += i;

        if (sum > n) {
            while (sum > n) {
                sum -= queue.pop();
            }
        }
        if (sum === n) cnt++;
    }

    return cnt;
}