function solution(board, k) {
    return board
        .flatMap((v, i) => v.filter((_, idx) => i + idx <= k))
        .reduce((acc, cur) => (acc += cur), 0);
}