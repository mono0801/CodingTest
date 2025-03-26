function solution(sides) {
    // let count = new Set();

    // const [min, max] = sides.sort((a, b) => a - b);

    // for (let i = 1; i <= max; i++) {
    //     if (min + i > max) count.add(i);
    // }

    // for (let i = 1; i < min + max; i++) {
    //     if (i < min + max && i > max) count.add(i);
    // }

    // return [...count].length;

    // max - min < i <= max => i의 갯수 = min
    // max <= i < min + max => i의 갯수 = min
    // i의 갯수 = 2 * min - 1 (max가 2번 들어가는 경우 제외)
    return Math.min(...sides) * 2 - 1;
}