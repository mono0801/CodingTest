function solution(ingredient) {
    const stack = [];
    let cnt = 0;

    ingredient.forEach((e) => {
        stack.push(e);
        if (stack.length >= 4 && e === 1) {
            if (stack.slice(-4).join("") === "1231") {
                stack.splice(-4, 4);
                cnt++;
            }
        }
    });

    return cnt;
}