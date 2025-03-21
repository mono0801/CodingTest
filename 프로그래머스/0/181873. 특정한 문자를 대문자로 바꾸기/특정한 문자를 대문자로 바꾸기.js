const op = {
    false: (str) => str,
    true: (str) => str.toUpperCase(),
};

function solution(my_string, alp) {
    return [...my_string].map((v) => op[v === alp](v)).join("");
}