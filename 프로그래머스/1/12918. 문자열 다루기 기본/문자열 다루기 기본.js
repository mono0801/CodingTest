function solution(s) {
    if (s.length !== 4 && s.length != 6) return false;

    for (const c of s) {
        if (isNaN(+c)) return false;
    }

    // return [...s].every(e => !isNaN(+e));

    return true;
}