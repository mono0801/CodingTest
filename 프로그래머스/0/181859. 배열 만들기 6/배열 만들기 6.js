function solution(arr) {
    let stk = [];
    arr.map((v) => (stk.at(-1) === v ? stk.pop() : stk.push(v)));

    return stk.length ? stk : [-1];
}