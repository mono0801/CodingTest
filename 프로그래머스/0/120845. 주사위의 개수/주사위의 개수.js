function solution(box, n) {
    return box.reduce((acc, cur) => (acc *= ~~(cur / n)), 1);
}