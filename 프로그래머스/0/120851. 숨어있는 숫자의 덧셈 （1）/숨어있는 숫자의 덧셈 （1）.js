function solution(my_string) {
    return my_string
        .replaceAll(new RegExp("[a-zA-Z]", "g"), "")
        .split("")
        .reduce((acc, cur) => (acc += +cur), 0);
}