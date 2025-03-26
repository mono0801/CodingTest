function solution(numbers, direction) {
    direction === "left"
        ? numbers.push(numbers.shift())
        : numbers.unshift(numbers.pop());

    return numbers;
}