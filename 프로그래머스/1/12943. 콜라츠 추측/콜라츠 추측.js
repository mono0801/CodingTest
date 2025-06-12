function solution(num) {
    let i = 0;
    while (num != 1 && i <= 500) {
        i++;
        if (num % 2) {
            num = num * 3 + 1;
        } else {
            num /= 2;
        }
    }

    return num === 1 ? i : -1;
}