const fact = (num) => {
    let f = 1;
    for (let i = 2; i <= num; i++) {
        f *= i;
    }
    return f;
};

function solution(balls, share) {
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}