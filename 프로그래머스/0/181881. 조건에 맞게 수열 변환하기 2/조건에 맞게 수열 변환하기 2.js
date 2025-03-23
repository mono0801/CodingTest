const fn = (arr) => {
    return arr.map((v) => {
        if (v >= 50 && v % 2 === 0) {
            v = v / 2;
        }
        if (v < 50 && v % 2 === 1) {
            v = v * 2 + 1;
        }
        return v;
    });
};

function solution(arr) {
    let i = 0;
    let arr_1 = fn(arr);

    while (1) {
        if (arr.join("") === arr_1.join("")) {
            break;
        }
        arr = fn(arr);
        arr_1 = fn(arr);
        i++;
    }

    return i;
}