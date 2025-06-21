function solution(s) {
    return s
        .split(" ")
        .map((str) =>
            [...str].map((e, i) => (!(i % 2) ? e.toUpperCase() : e.toLowerCase())).join("")
        )
        .join(" ");
}