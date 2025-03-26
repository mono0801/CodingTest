function solution(n) {
    let i = 6;
    for (; i <= 300; i += 6) {
        if (!(i % n)) break;
    }
    return i / 6;
}