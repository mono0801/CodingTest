function solution(players, callings) {
    const map = new Map();

    players.forEach((player, idx) => {
        map.set(player, idx);
    });

    callings.forEach((e) => {
        let curNum = map.get(e);
        let frontPlayer = players[curNum - 1];

        [players[curNum - 1], players[curNum]] = [
            players[curNum],
            players[curNum - 1],
        ];

        map.set(frontPlayer, curNum);
        map.set(e, curNum - 1);
    });

    return players;
}