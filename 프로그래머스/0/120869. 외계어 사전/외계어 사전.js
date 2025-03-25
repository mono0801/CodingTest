function solution(spell, dic) {
    let answer = 2;
    dic.map((v) => {
        if (v.length === spell.length) {
            for (let i = 0; i < spell.length; i++) {
                v = v.replace(new RegExp(spell[i]), "");
            }
        }
        if (v.length === 0) answer = 1;
        return v;
    });

    return answer;
}