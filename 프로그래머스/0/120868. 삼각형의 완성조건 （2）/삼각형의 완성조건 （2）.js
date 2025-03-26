function solution(sides) {
    let count = new Set();

    const [min, max] = sides.sort((a, b) => a - b);

    for (let i = 1; i <= max; i++) {
        if (min + i > max) count.add(i);
    }

    for (let i = 1; i < min + max; i++) {
        if (i < min + max && i > max) count.add(i);
    }

    return [...count].length;
}