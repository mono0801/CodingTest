function solution(my_string) {
    return my_string.replaceAll(new RegExp("[aeiou]", "g"), "");
}