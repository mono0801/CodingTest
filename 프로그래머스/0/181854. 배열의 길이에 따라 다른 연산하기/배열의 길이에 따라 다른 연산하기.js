function solution(arr, n) {
    if (arr.length % 2) {
        return arr.map((v, i) => {
            if (!(i % 2)) {
                return v + n;
            }
            return v;
        });
    }
    return arr.map((v, i) => {
        if (i % 2) {
            return v + n;
        }
        return v;
    });
}
