function solution(n) {
    for (let i = 6; i <= 300; i += 6) {
        if (!(i % n)) return i / 6;
    }
}