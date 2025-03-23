const op = {
    0: (n) => n / 2,
    1: (n) => (n - 1) / 2,
};

function solution(num_list) {
    const data = {
        i: 0,
    };

    num_list.map((v) => {
        while (v != 1) {
            v = op[v % 2](v);
            data.i++;
        }
    });

    return data.i;
}