function solution(price, money, count) {
    const total = (price * count * (count + 1)) / 2;
    const answer = total - money;

    return answer > 0 ? answer : 0;
}