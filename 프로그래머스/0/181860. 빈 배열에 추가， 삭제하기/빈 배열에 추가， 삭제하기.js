const op = {
    false: (arr, num) => {
        return arr.slice(0, -num);
    },
    true: (arr, num) => {
        arr.push(new Array(num * 2).fill(num));
        return arr.flat();
    },
};

function solution(arr, flag) {
    let answer = [];
    flag.map((v, i) => {
        answer = op[v](answer, arr[i]);
    });

    return answer;
}