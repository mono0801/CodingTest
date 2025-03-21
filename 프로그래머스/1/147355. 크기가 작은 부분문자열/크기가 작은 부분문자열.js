function solution(t, p) {
    const lenght = p.length;
    const arr = [];

    for (let i = 0; i <= t.length - lenght; i++) {
        arr.push(t.slice(i, i + lenght));
    }

    return arr.filter((v) => +v <= +p).length;
}