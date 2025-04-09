function solution(arr, query) {
    return query
        .map((v, i) =>
            i % 2 === 0 ? (arr = arr.slice(0, v + 1)) : (arr = arr.slice(v))
        )
        .at(-1);
}