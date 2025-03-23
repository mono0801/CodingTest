function solution(my_string) {
    return [...my_string].reduce(
        (acc, cur) =>
            cur.charCodeAt() > 96
                ? acc + cur.toUpperCase()
                : acc + cur.toLowerCase(),
        ""
    );
}