function solution(name, yearning, photo) {
    const map = new Map();
    name.forEach((e, i) => {
        map.set(e, yearning[i]);
    });

    return photo.map((arr) =>
        arr.reduce(
            (acc, cur) => (map.has(cur) ? (acc += map.get(cur)) : acc),
            0
        )
    );
}