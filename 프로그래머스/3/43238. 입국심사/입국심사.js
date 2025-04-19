const solution = (num, times) => {
    let end = 9999999999999999n;
    let start = 0n;

    let answer = 0n;
    while (start <= end) {
        answer = (end + start) / 2n;

        let result = times.reduce(
            (acc, cur) => (acc += answer / BigInt(cur)),
            0n
        );

        if (result < num) {
            start = answer + 1n;
        } else {
            end = answer - 1n;
        }
    }

    return Number(start);
};