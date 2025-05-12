function solution(keymap, targets) {
    const answer = [];

    targets.forEach((e) => {
        let sum = 0;
        let num = Infinity;
        for (let i = 0; i < e.length; i++) {
            for (let j = 0; j < keymap.length; j++) {
                let n = keymap[j].indexOf(e[i]) + 1;
                if (n != 0 && n < num) num = n;
            }

            if (num === Infinity) {
                sum = -1;
                break;
            }

            sum += num;
            num = Infinity;
        }
        answer.push(sum);
    });

    return answer;
}