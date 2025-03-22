function solution(A, B) {
    let i = 0;
    const arr = A.split("");

    for (i; i < arr.length; i++) {
        if (B === arr.join("")) break;
        arr.unshift(arr.pop());
    }

    return i === arr.length ? -1 : i;
}