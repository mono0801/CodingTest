function solution(n, words) {
    const hash = new Set();
    let prev = words[0];
    hash.add(prev);

    for (let i = 1; i < words.length; i++) {
        if ([...prev].pop() === [...words[i]][0]) {
            prev = words[i];
        } else {
            // return (i + 1) % n ? [(i + 1) % n, Math.ceil((i + 1) / n)] : [n, Math.ceil((i + 1) / n)];
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        if (hash.has(words[i])) {
            // return (i + 1) % n ? [(i + 1) % n, Math.ceil((i + 1) / n)] : [n, Math.ceil((i + 1) / n)];
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        hash.add(words[i]);
    }

    return [0, 0];
}