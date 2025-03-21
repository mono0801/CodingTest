function solution(picture, k) {
    return picture
        .map((v) => {
            let str = v.replaceAll("x", "x".repeat(k));
            return (str = str.replaceAll(".", ".".repeat(k)));
        })
        .reduce((acc, cur) => {
            for (let i = 0; i < k; i++) {
                acc.push(cur);
            }
            return acc;
        }, []);
}
