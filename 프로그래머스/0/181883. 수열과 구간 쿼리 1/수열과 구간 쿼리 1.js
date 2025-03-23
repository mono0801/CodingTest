function solution(arr, queries) {
    queries.map(([s, e]) => {
        arr.map((_, i) => {
            if (i >= s && i <= e) arr[i]++;
        });
    });

    return arr;
}