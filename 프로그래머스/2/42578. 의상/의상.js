function solution(clothes) {
    const passion = new Map();

    clothes.map(([cl, ki]) => {
        const cur = passion.get(ki);
        cur ? passion.set(ki, [...cur, cl]) : passion.set(ki, [cl]);
    });

    if (passion.size === 1) return [...passion.values()].flat().length;

    return (
        [...passion.values()]
            .map((arr) => arr.length)
            .reduce((acc, cur) => (acc *= cur + 1), 1) - 1
    );
}