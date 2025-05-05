function solution(friends, gifts) {
    let list = Array.from({ length: friends.length }, () =>
        new Array(friends.length).fill(0)
    );
    for (let i = 0; i < list.length; i++) {
        list[i][i] = null;
    }

    const map = new Map();
    friends.forEach((e) => map.set(e, 0));

    gifts.forEach((e) => {
        const [a, b] = e.split(" ");
        map.set(a, map.get(a) + 1);
        map.set(b, map.get(b) - 1);

        const sender = friends.indexOf(a);
        const reciver = friends.indexOf(b);
        list[sender][reciver]++;
    });

    const answer = new Array(list.length).fill(0);
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (j === i) continue;
            if (list[i][j] > list[j][i]) {
                answer[i]++;
            } else if (list[i][j] == list[j][i]) {
                const sender = friends[i];
                const reciver = friends[j];
                if (map.get(sender) > map.get(reciver)) answer[i]++;
            }
        }
    }

    return Math.max(...answer);
}