function solution(my_string) {
    //const countMap = {};

    //[...my_string].map((v) => (countMap[v] = 0));
    //return Object.keys(countMap).join("");
    return [...new Set(my_string)].join("");
}