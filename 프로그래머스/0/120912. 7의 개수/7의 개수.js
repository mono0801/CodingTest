function solution(array) {
    return array.flatMap((v) => {
        let arr = (v + "").match(new RegExp("7", "g"));
        return arr ? arr : [];
    }).length;
}
