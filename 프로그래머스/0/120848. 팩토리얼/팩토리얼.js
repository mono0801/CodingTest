const fact = (num) => {
    let f = 1;
    for (let i = num; i > 0; i--) {
        f *= i;
    }
    return f;
};

function solution(n) {
    let i = 10;
    while (i > 0) {
        if (fact(i) <= n) break;
        i--;
    }
    return i;
}