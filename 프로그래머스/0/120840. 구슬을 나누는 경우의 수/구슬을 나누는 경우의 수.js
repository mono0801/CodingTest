const fact = (num) => {
    let f = 1n;
    for (let i = 2n; i <= num; i++) {
        f *= i;
    }
    return f;
};

function solution(balls, share) {
    return fact(balls) / fact(balls - share) / fact(share);
}