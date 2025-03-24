function solution(chicken) {
    const answer = {
        coupon: chicken,
        sevice: 0,
    };

    for (; answer.coupon >= 10; ) {
        let coupon = ~~(answer.coupon / 10);
        answer.sevice += coupon;
        answer.coupon = answer.coupon % 10;
        answer.coupon += coupon;
    }

    return answer.sevice;
}