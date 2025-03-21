const op = {
    false: (str) => str.toLowerCase(),
    true: (str) => str.toUpperCase(),
};

function solution(myString) {
    return [...myString].map((v) => op[v === "a" || v === "A"](v)).join("");
}