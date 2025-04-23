function solution(my_string) {
    const result = new Array(52).fill(0);

    [...my_string].map((v) => {
        result[
            v.codePointAt() > 90 ? v.codePointAt() - 71 : v.codePointAt() - 65
        ]++;
    });

    return result;
}