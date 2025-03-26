function solution(emergency) {
    // toSorted() ???
    const sort = emergency.map((v) => v).sort((a, b) => b - a);
    return emergency.map((v) => sort.indexOf(v) + 1);
}