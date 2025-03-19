function solution(arr) {
    let stk = [];
    let i = 0;

    while (i != arr.length) {
        if (stk.length === 0 || stk.at(-1) != arr[i]) {
            stk.push(arr[i]);
        } else {
            stk.pop();
        }

        i++;
    }

    return stk.length ? stk : [-1];
}