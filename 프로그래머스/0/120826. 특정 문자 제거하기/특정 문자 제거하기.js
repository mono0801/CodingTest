function solution(my_string, letter) {
    return my_string.replaceAll(new RegExp(letter, "g"), "");
}