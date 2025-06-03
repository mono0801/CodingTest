function solution(x) {
    return !!!(x % [...String(x)].reduce((acc, cur) => acc += +cur, 0));
}