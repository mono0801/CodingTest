const oper = {
    //
    "+": (a, b) => +a + +b,
    "-": (a, b) => +a - +b,
    "*": (a, b) => +a * +b,
};

function solution(myString) {
    const [a, op, b] = myString.split(" ");
    return oper[op](a, b)
}