function solution(myString, pat) {
    pat = [...pat].map((v) => (v === "A" ? "B" : "A")).join("");
    return myString.includes(pat) ? 1 : 0;
}