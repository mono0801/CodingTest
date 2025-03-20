function solution(my_string, target) {
    return +(my_string.match(new RegExp(target, "g")) && true);
}