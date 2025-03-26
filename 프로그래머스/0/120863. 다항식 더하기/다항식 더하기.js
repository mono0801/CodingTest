function solution(polynomial) {
    const eq = { x: [], num: [] };
    polynomial.split(" + ").map((v) => {
        v.search(/x/) >= 0
            ? eq.x.push(+v.replace("x", "") ? +v.replace("x", "") : 1)
            : eq.num.push(+v);
    });

    let x = eq.x.reduce((acc, cur) => (acc += cur), 0);
    x = x <= 1 ? (x === 0 ? "" : "x") : x + "x";
    const num = eq.num.reduce((acc, cur) => (acc += cur), 0);

    if (x && num) return `${x} + ${num}`;
    if (num === 0) return `${x}`;
    return `${num}`;
}