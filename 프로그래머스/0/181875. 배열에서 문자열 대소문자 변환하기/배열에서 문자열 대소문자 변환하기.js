const op = {
    0: (str) => str.toLowerCase(),
    1: (str) => str.toUpperCase(),
};

function solution(myString) {
    return myString.map((v, i) => op[i % 2](v));
}