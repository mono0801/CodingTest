const op = {
    "+":(x, y)=>x+y,
    "-":(x, y)=>x-y,
}

function solution(quiz) {
    return quiz
        .map((v) => v.split(" "))
        .map((v) => {
            return op[v[1]](+v[0], +v[2]) === +v[4] ? "O" : "X";
        });
}