function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        const newBottle = ~~(n / a) * b;
        const remain = n % a;

        answer += newBottle;
        n = newBottle + remain;
    }

    return answer;
}