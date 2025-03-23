function solution(cipher, code) {
    return [...cipher].filter((v, i) => !((i + 1) % code)).join("");
}