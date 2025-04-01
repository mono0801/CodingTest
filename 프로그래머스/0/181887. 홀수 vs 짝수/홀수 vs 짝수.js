function solution(num_list) {
    const odd = num_list
        .filter((_, i) => i % 2)
        .reduce((acc, cur) => acc + cur, 0);
    const even = num_list
        .filter((_, i) => !(i % 2))
        .reduce((acc, cur) => acc + cur, 0);

    return Math.max(odd, even);
}