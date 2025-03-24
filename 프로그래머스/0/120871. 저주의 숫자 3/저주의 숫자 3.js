function solution(n) {
    let num = 0;
    for (let i = 0; i < n; i++) {
        num++;
        while (true) {
            if (!(num % 3) || ("" + num).match(new RegExp("3", "g"))) {
                num++;
            } else {
                break;
            }
        }
    }

    return num;
}