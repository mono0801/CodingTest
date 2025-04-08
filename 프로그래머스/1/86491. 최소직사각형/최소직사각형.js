function solution(sizes) {
    const wArr = [],
        hArr = [];

    sizes.forEach(([e1, e2], i) => {
        if (e1 < e2) [sizes[i][0], sizes[i][1]] = [e2, e1];
    });

    sizes.forEach(([w, h]) => {
        wArr.push(w);
        hArr.push(h);
    });

    return Math.max(...wArr) * Math.max(...hArr);
}