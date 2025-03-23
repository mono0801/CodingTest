const mkCount = (map, str) =>
    [...str].map((v) => map.set(v, (map.get(v) || 0) + 1));

function solution(before, after) {
    let isValid = true;
    const beforeCount = new Map();
    const afterCount = new Map();

    mkCount(beforeCount, before);
    mkCount(afterCount, after);

    [...beforeCount].map(([key, value]) => {
        if (afterCount.get(key) != value) isValid = false;
    });

    return +isValid;
}