function solution(k, score) {
    const honor = [];

    return score.map((e) => {
        honor.push(e);
        honor.sort((a, b) => b - a);

        if (honor.length > k) honor.pop();

        return honor[honor.length - 1];
    });
}