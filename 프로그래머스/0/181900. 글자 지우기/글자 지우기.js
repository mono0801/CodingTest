function solution(my_string, indices) {
    const answer = [...my_string];

    indices.forEach((v) => (answer[v] = ""));

    return answer.join("");
}