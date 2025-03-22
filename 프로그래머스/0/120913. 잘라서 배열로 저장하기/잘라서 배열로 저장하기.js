function solution(my_str, n) {
    // let anwser = [];
    // for (let i = 0; i < my_str.length; i += n) {
    //     anwser.push(my_str.substring(i, i + n));
    // }

    // return anwser;
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}