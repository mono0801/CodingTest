function solution(s) {
    let prev = 0;
    return s.split(" ").reduce((acc, cur) => {
        prev = cur === "Z" ? prev : +cur;
        return cur === "Z" ? (acc -= prev) : (acc += +cur);
    }, 0);
}