function solution(numbers) {
    const num = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    let str = numbers;
    Object.keys(num).map(
        (v) => (str = str.replaceAll(new RegExp(v, "g"), num[v]))
    );
    
    return +str;
}