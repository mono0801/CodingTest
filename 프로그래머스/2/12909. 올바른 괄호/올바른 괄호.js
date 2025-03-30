function solution(s) {
    const stack = [];
    [...s].map((v) => {
        if (stack.at(-1) == "(" && v == ")") {
            stack.pop();
        } else {
            stack.push(v);
        }
    });

    return stack[0] ? false : true;
}