function solution(n, slicer, num_list) {
    return operator[n](slicer, num_list);
}

const operator = {
    1: (slicer, num_list) => num_list.slice(0, slicer[1] + 1),

    2: (slicer, num_list) => num_list.slice(slicer[0]),

    3: (slicer, num_list) => num_list.slice(slicer[0], slicer[1] + 1),

    4: (slicer, num_list) =>
        num_list
            .slice(slicer[0], slicer[1] + 1)
            .filter((_, i) => i % slicer[2] === 0),
};