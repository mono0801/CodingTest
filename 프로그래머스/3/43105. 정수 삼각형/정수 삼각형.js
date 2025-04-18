const solution = (triangle) => {
    let anwser = triangle.map((v) => new Array(v.length).fill(0));
    anwser[0][0] = triangle[0][0];

    for (let i = 0; i < triangle.length - 1; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            let left = anwser[i][j] + triangle[i + 1][j];
            let right = anwser[i][j] + triangle[i + 1][j + 1];

            anwser[i + 1][j] =
                anwser[i + 1][j] < left ? left : anwser[i + 1][j];
            anwser[i + 1][j + 1] =
                anwser[i + 1][j + 1] < right ? right : anwser[i + 1][j];
        }
    }
    return Math.max(...anwser[anwser.length - 1]);
};