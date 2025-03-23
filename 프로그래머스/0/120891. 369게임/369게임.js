function solution(order) {
    return [...("" + order).matchAll(/3|6|9/g)].length;
}