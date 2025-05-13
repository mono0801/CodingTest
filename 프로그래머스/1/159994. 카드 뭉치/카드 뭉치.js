function solution(cards1, cards2, goal) {
    cards1.reverse();
    cards2.reverse();

    for (let i = 0; i < goal.length; i++) {
        let w1 = cards1.pop();
        let w2 = cards2.pop();

        if (w1 === goal[i]) {
            cards2.push(w2);
        } else if (w2 === goal[i]) {
            cards1.push(w1);
        } else {
            return "No";
        }
    }

    return "Yes";
}