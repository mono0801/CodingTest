function solution(numbers, k) {
    return numbers.at(((2 * k - 1) % numbers.length) - 1);
}