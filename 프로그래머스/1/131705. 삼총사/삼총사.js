function solution(number) {
    let cnt = 0;

    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < i; j++) {
            for (let p = 0; p < j; p++) {
                if (number[i] + number[j] + number[p] === 0) {
                    cnt++;
                }
            }
        }
    }

    return cnt;
}