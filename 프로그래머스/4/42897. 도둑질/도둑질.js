function solution(money) {
    const dp1 = [0, ...money.slice(1)];
    const dp2 = [0, ...money.slice(0, money.length - 1)];

    for (let i = 2; i < money.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + dp1[i]);
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + dp2[i]);
    }

    return Math.max(dp1[money.length - 1], dp2[money.length - 1]);
}