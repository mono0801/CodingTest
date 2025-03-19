function solution(rank, attendance) {
    const arr = rank
        .filter((v, i) => {
            if (attendance[i]) {
                return v;
            }
        })
        .sort((a, b) => a - b)
        .slice(0, 3);

    return (
        rank.indexOf(arr[0]) * 10000 +
        rank.indexOf(arr[1]) * 100 +
        rank.indexOf(arr[2])
    );
}